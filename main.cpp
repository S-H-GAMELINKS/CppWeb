#include "httplib.h"

int main(void)
{
    using namespace httplib;

    Server svr;

    svr.set_base_dir("./assets");

    svr.listen("localhost", 3000);
}