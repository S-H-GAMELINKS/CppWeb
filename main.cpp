#include "httplib.h"
#include <fstream>
#include <sstream>
#include <string>
#include <array>

std::string LoadAssets(){

    std::ifstream assets("./assets/index.html");

    std::stringstream strstream;
    strstream << assets.rdbuf();
    assets.close();

    return strstream.str();
}

int main(void)
{
    using namespace httplib;

    Server svr;

    std::string pages = LoadAssets();

    const std::array<std::string, 3> routes = {"/", "/about", "/contact"};

    for(auto&& route : routes) {
        svr.Get(route.c_str(), [&](const Request& /*req*/, Response& res) {
            res.set_content(pages.c_str(), "text/html");
        });
    }

    svr.listen("localhost", 3000);
}