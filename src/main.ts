import Teseract from "TeseractAPI/Teseract";

import Test from "src/teseract/api/test/Main";

const test = new Test()
Teseract.registerPlugin(test, "cib:uhc")