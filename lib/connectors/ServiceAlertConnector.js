"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var ServiceAlertsElement_1 = require("../classes/ServiceAlertsElement");
/**
 * Connector used to get data from https://help.elderscrollsonline.com/app/answers/detail/a_id/4320
 */
var ServiceAlertConnector = /** @class */ (function () {
    function ServiceAlertConnector() {
    }
    /**
       * Methode used to get raw content of the remote website
       *
       * @public
       * @static
       *
       * @return Promise<string> Raw content of the remote website
       */
    ServiceAlertConnector.getRemoteContent = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.get(ServiceAlertConnector.url)];
                    case 1:
                        response = _a.sent();
                        if ((response === null || response === void 0 ? void 0 : response.status) !== 200) {
                            throw new Error("Bad response ".concat(response === null || response === void 0 ? void 0 : response.status, " (").concat(response === null || response === void 0 ? void 0 : response.data, ")"));
                        }
                        else if (!(response === null || response === void 0 ? void 0 : response.data)) {
                            throw new Error("Empty response ".concat(response === null || response === void 0 ? void 0 : response.status, " (").concat(response === null || response === void 0 ? void 0 : response.data, ")"));
                        }
                        else {
                            return [2 /*return*/, response === null || response === void 0 ? void 0 : response.data];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
       * Methode used to select raw content containing eso servers status information
       *
       * @public
       * @static
       *
       * @param remoteContent Raw content of the remote website
       * @return string Raw content containing eso servers status information
       */
    ServiceAlertConnector.getFilterContent = function (remoteContent) {
        var resultRemoveBefore = remoteContent.split('<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->');
        if (resultRemoveBefore.length >= 2) {
            var resultRemoveAfter = resultRemoveBefore[1].split('<p>&nbsp;</p>');
            if (resultRemoveAfter.length >= 2) {
                return "<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->".concat(resultRemoveAfter[0], "<p>&nbsp;</p>");
            }
        }
        return '';
    };
    /**
       * Methode used to get list of each raw information by date
       *
       * @public
       * @static
       *
       * @param filteredContent string Raw content containing eso servers status information
       * @return string[] List of each information by date
       */
    ServiceAlertConnector.changeFilterContentForList = function (filteredContent) {
        return filteredContent
            .split('<hr />')
            .filter(function (item) { return !item.includes('&nbsp;'); });
    };
    /**
       * Methode used to get raw data of content list
       *
       * @public
       * @static
       *
       * @param filteredContentList string[] Raw data of content list
       * @return {raw: string, rawDate: string, rawData: string[]}[] Raw data of content list
       */
    ServiceAlertConnector.getRawData = function (filteredContentList) {
        return filteredContentList.map(function (item) {
            var list = item
                .split('</p>')
                .map(function (line) {
                var newLine = line;
                newLine = newLine.replace('\n', '')
                    .replace('\n', '')
                    .replace('</p>', '')
                    .replace('<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->', '')
                    .replace('<p>', '');
                return newLine;
            })
                .filter(function (line) { return line.length > 2; });
            return {
                raw: item,
                rawDate: list[0],
                rawData: list.slice(1, list.length),
            };
        });
    };
    /**
       * Methode used to get list of split raw data of content list
       *
       * @public
       * @static
       *
       * @param rawData {raw: string, rawDate: string, rawData: string[]}[] Raw data of content list
       * @return RawEsoStatus[] Split raw data of content list
       */
    ServiceAlertConnector.splitRawData = function (rawData) {
        var list = [];
        rawData.forEach(function (item) {
            item.rawData.forEach(function (line) {
                list.push({
                    sources: [ServiceAlertConnector.url],
                    raw: [item.raw],
                    rawDate: item.rawDate,
                    rawData: line,
                });
            });
        });
        return list;
    };
    /**
       * Methode used to get slug of split raw data of content list
       *
       * @public
       * @static
       *
       * @param splitRawData RawEsoStatus[] Split raw data of content list
       * @return RawEsoStatus[] Split raw data of content list with slug
       */
    ServiceAlertConnector.getSlugOfSplitRawData = function (splitRawData) {
        return splitRawData.map(function (item) {
            var _a;
            return ({
                sources: item.sources,
                raw: item.raw,
                rawDate: item.rawDate,
                rawData: item.rawData,
                slugs: ServiceAlertsElement_1.default.getSlug((_a = item.rawData) !== null && _a !== void 0 ? _a : ''),
            });
        });
    };
    /**
       * Methode used to get split raw data of content list by slug
       *
       * @public
       * @static
       *
       * @param splitRawDataWithSlug RawEsoStatus[] Split raw data of content list with slug
       * @return RawEsoStatus[] Split raw data of content list by slug
       */
    ServiceAlertConnector.splitRawDataList = function (splitRawDataWithSlug) {
        var list = [];
        splitRawDataWithSlug.forEach(function (item) {
            var _a;
            (_a = item.slugs) === null || _a === void 0 ? void 0 : _a.forEach(function (slug) {
                list.push({
                    sources: item.sources,
                    raw: item.raw,
                    rawDate: item.rawDate,
                    rawData: item.rawData,
                    slugs: [slug],
                });
            });
        });
        return list;
    };
    /**
       * Methode used to get last element by slug
       *
       * @public
       * @static
       *
       * @param splitRawDataList RawEsoStatus[] Split raw data of content list by slug
       * @return RawEsoStatus[] Raw eso server status list sorted by date
       */
    ServiceAlertConnector.getLastRawData = function (splitRawDataList) {
        var last = [];
        var list = [];
        splitRawDataList.forEach(function (item) {
            if (item && item.slugs && !last.includes(item.slugs[0])) {
                last.push(item.slugs[0]);
                list.push(item);
            }
        });
        return list;
    };
    /**
       * Methode used to get last eso status server with data
       *
       * @public
       * @static
       *
       * @param lastRawData RawEsoStatus[] Raw eso server status list sorted by date
       * @return RawEsoStatus[] Last eso status server with data
       */
    ServiceAlertConnector.getData = function (lastRawData) {
        return lastRawData.map(function (item) {
            var _a, _b;
            var newItem = item;
            if (newItem.slugs) {
                newItem.dates = [ServiceAlertsElement_1.default.getDate((_a = newItem.rawDate) !== null && _a !== void 0 ? _a : '')];
                newItem.type = ServiceAlertsElement_1.default.getType(newItem.slugs[0]);
                newItem.support = ServiceAlertsElement_1.default.getSupport(newItem.slugs[0]);
                newItem.zone = ServiceAlertsElement_1.default.getZone(newItem.slugs[0]);
                newItem.status = ServiceAlertsElement_1.default.getStatus((_b = newItem.rawData) !== null && _b !== void 0 ? _b : '');
            }
            return newItem;
        });
    };
    /**
       * URL to get remote content
       *
       * @public
       * @static
       *
       * @return string URL to get remote content
       */
    ServiceAlertConnector.url = 'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320';
    return ServiceAlertConnector;
}());
exports.default = ServiceAlertConnector;
