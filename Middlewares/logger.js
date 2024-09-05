const logger = (req, res, next) => {
    const now = new Date().toISOString();
    console.log(`[${now}] ${req.method} ${req.url}`);
    next(); // Asegúrate de que next() esté siempre al final
};

module.exports = logger;
