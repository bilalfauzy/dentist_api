const authRoute = require('./auth.route')
const userRoute = require('./user.route')
const reservasiRoute = require('./reservasi.route')
const dokterRoute = require('./dokter.route')
const layananRoute = require('./layanan.route')
const jadwalRoute = require('./jadwal.route')

const routes = [
    {
        path: "/auth",
        handler: authRoute
    },
    {
        path: "/user",
        handler: userRoute
    },
    {
        path: "/reservasi",
        handler: reservasiRoute
    },
    {
        path: "/dokter",
        handler: dokterRoute
    },
    {
        path: "/layanan",
        handler: layananRoute
    },
    {
        path: "/jadwal",
        handler: jadwalRoute
    },
]

module.exports = (app) => {
	routes.forEach((router) => {
		app.use(router.path, router.handler);
	});
};