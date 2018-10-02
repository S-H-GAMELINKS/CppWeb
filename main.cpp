#include "httplib.h"
#include <fstream>
#include <sstream>
#include <string>

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

    svr.Get("/about", [&](const Request& /*req*/, Response& res) {
        res.set_content(pages.c_str(), "text/html");
    });

    svr.listen("localhost", 3000);
}