// Lightweight Supabase Lead Service with Offline LocalStorage Backup
const SUPABASE_URL = "https://pufsatervlyexdirkxij.supabase.co";
const SUPABASE_KEY = "sb_publishable_xkbFj7XTjdcCu0dUfbO0QA_1x_v4twB";

export async function submitLead(leadData) {
  // 1. Always backup to local storage first
  try {
    const existing = JSON.parse(localStorage.getItem('gloovup_leads_v2') || '[]');
    existing.push({
      ...leadData,
      submittedAt: new Date().toISOString()
    });
    localStorage.setItem('gloovup_leads_v2', JSON.stringify(existing));
  } catch (err) {
    console.warn('LocalStorage backup warning:', err);
  }

  // 2. Direct REST insert to Supabase landingwebsiteleads
  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/landingwebsiteleads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'Prefer': 'return=representation'
      },
      body: JSON.stringify({
        name: leadData.name,
        email: leadData.email || 'customer@gloovup.com',
        phone: leadData.phone,
        location: leadData.location || 'Tamil Nadu',
        service_needed: leadData.service_needed || 'Website Development',
        selected_package_name: leadData.selected_package_name || 'Business Starter Suite',
        selected_package_price: leadData.selected_package_price || '₹9,998',
        delivery_time: leadData.delivery_time || '7 Days',
        payment_amount: 1,
        payment_status: 'slot_reserved',
        booking_status: 'new'
      })
    });

    if (!response.ok) {
      console.warn('Supabase lead submission returned non-200:', response.status);
    }
  } catch (err) {
    console.warn('Supabase network dispatch skipped:', err.message);
  }

  return { success: true };
}
