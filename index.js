const { send } = require('micro');

module.exports = async (req, res) => {
    send(res, 200, { message: 'Hello, World from Vercel staging!' });
};
