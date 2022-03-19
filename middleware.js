//this is middleware - that can change the req, res
const reqFilter = (req, resp, next) => {
    if (!req.query.age) {
        resp.send("Please provide age : learning middleware");
    } else if (req.query.age < 18) {
        resp.send("You can't learn Middleware at this age! do you think I am kidding 😁😁");
    } else {
        next();
    }
};

export default reqFilter;