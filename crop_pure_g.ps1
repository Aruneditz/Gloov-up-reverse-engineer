Add-Type -AssemblyName System.Drawing

$src = "C:\Users\ELCOT\.gemini\antigravity\brain\fd90ad22-0827-4333-a065-bec1c78c9a18\.user_uploaded\media_1793770139468_84cf05ab.png"
$destDir = "C:\Users\ELCOT\.gemini\antigravity\scratch\Gloov-up rebuild\public\images"

$bmp = [System.Drawing.Bitmap]::FromFile($src)
$w = $bmp.Width
$h = $bmp.Height

# Check non-empty pixels column by column between x=220 and x=290
Write-Host "Analyzing columns in source..."
$colCounts = @{}
for ($x = 220; $x -lt 290; $x++) {
    $count = 0
    for ($y = 220; $y -lt 290; $y++) {
        $p = $bmp.GetPixel($x, $y)
        if ($p.A -gt 25) { $count++ }
    }
    $colCounts[$x] = $count
    if ($count -gt 0) {
        Write-Host "Col $x : $count non-transparent pixels"
    }
}

# The main G body ends around x=282 or 283, then there is a gap of 0s, and then column 287 has the vertical artifact line!
# Find the right edge of the G circular body (before any gap):
$gMinX = 223
$gMaxX = 223
$gMinY = 500
$gMaxY = 0

for ($x = 223; $x -lt 284; $x++) {
    for ($y = 220; $y -lt 290; $y++) {
        $p = $bmp.GetPixel($x, $y)
        if ($p.A -gt 25) {
            if ($x -gt $gMaxX) { $gMaxX = $x }
            if ($y -lt $gMinY) { $gMinY = $y }
            if ($y -gt $gMaxY) { $gMaxY = $y }
        }
    }
}

Write-Host "Pure G bounds: minX=$gMinX, maxX=$gMaxX, minY=$gMinY, maxY=$gMaxY"
$pureW = $gMaxX - $gMinX + 1
$pureH = $gMaxY - $gMinY + 1
Write-Host "Pure G size: $pureW x $pureH"

# Crop tight without any padding on the right edge so the text 'loov Up' can sit right next to the G!
$cropped = [System.Drawing.Bitmap]::new($pureW, $pureH, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

for ($y = 0; $y -lt $pureH; $y++) {
    for ($x = 0; $x -lt $pureW; $x++) {
        $orig = $bmp.GetPixel($gMinX + $x, $gMinY + $y)
        if ($orig.A -gt 0) {
            $lightness = [Math]::Max($orig.R, [Math]::Max($orig.G, $orig.B)) / 255.0
            # Vibrant blue recolor
            $r = [int](25 + $lightness * 50)
            $g = [int](80 + $lightness * 110)
            $b = [int](210 + $lightness * 45)
            if ($r -gt 255) { $r = 255 }
            if ($g -gt 255) { $g = 255 }
            if ($b -gt 255) { $b = 255 }
            $cropped.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($orig.A, $r, $g, $b))
        }
    }
}

$bmp.Dispose()

# Save pure tight blue G
$cropped.Save("$destDir\gloovup-g-pure-blue.png", [System.Drawing.Imaging.ImageFormat]::Png)

# Also update gloovup-g-logo.png with square padding for favicon, but with the vertical line REMOVED
$maxDim = [Math]::Max($pureW, $pureH)
$sqSize = $maxDim + 4
$sqBmp = [System.Drawing.Bitmap]::new($sqSize, $sqSize, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$offX = [int](($sqSize - $pureW) / 2)
$offY = [int](($sqSize - $pureH) / 2)

for ($y = 0; $y -lt $pureH; $y++) {
    for ($x = 0; $x -lt $pureW; $x++) {
        $sqBmp.SetPixel($offX + $x, $offY + $y, $cropped.GetPixel($x, $y))
    }
}

function Resize-Img($img, $w, $h) {
    $res = [System.Drawing.Bitmap]::new($w, $h, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $g = [System.Drawing.Graphics]::FromImage($res)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.Clear([System.Drawing.Color]::Transparent)
    $g.DrawImage($img, 0, 0, $w, $h)
    $g.Dispose()
    return $res
}

$logo512 = Resize-Img $sqBmp 512 512
$logo512.Save("$destDir\gloovup-g-logo.png", [System.Drawing.Imaging.ImageFormat]::Png)
$logo512.Dispose()

$cropped.Dispose()
$sqBmp.Dispose()

Write-Host "Pure G logo without vertical artifact created successfully!"
