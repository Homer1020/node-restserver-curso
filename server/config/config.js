// ====================
//	Puerto
// ====================
process.env.PORT = process.env.PORT || 3000;

// ====================
//	Vencimiento del Token
// ====================
// 60 segundos
// 60 minutos
// 24 horas
// 30 días
process.env.CADUCIDAD_TOKEN = '48h';

// ====================
//	SEED de autenticación
// ====================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

// ====================
//	Google Client ID
// ====================
process.env.CLIENT_ID = process.env.CLIENT_ID || '380461750628-l4qkkc64j1p6fhbqppou2qs761nhb3rl.apps.googleusercontent.com';