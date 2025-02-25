export default function handler(req, res) {
  // الوصول إلى متغير البيئة PAYPAL_API_KEY
  const paypalApiKey = process.env.PAYPAL_API_KEY;
  
  // إرسال الـ API Key إلى الواجهة الأمامية بشكل آمن
  res.status(200).json({ apiKey: paypalApiKey });
}
