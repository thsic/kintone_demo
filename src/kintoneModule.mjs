//kintoneカスタマイズで使うモジュールをまとめたファイル

/**ルール
 * RESTAPIを利用する際は、kintone.api()を使う。
 * JavaScriptAPIを利用する際は、kintone.app ~ () を使う。
 */

/**
 * レコードを取得する
 * @param {Number} appId 
 * @param {String} query
 * @param {String} fields
 * @param {Boolean} totalCount
 * @returns {Object} {record: Array, totalCount: Number }
 */
export async function getRecords(appId, query, fields, totalCount) {
    return kintone.api(kintone.api.url('/k/v1/records', true), 'GET', {
        app: appId,
        query: query,
        fields: fields,
        totalCount: totalCount
    });
}

/**
 * 現在開いているレコードを取得する
 * @return {Object} {record: Array}
 */
export async function getCurrentRecord() {
    return kintone.app.record.get();
}