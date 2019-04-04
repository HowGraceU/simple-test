report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\taobao_taobao_index_0_document_0_phone.png",
        "test": "..\\bitmaps_test\\20190331-191351\\taobao_taobao_index_0_document_0_phone.png",
        "selector": "document",
        "fileName": "taobao_taobao_index_0_document_0_phone.png",
        "label": "taobao index",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "https://h5.m.taobao.com/?sprefer=sypc00",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "phone",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "13.93",
          "analysisTime": 42
        },
        "diffImage": "..\\bitmaps_test\\20190331-191351\\failed_diff_taobao_taobao_index_0_document_0_phone.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\taobao_taobao_index_0_document_1_tablet.png",
        "test": "..\\bitmaps_test\\20190331-191351\\taobao_taobao_index_0_document_1_tablet.png",
        "selector": "document",
        "fileName": "taobao_taobao_index_0_document_1_tablet.png",
        "label": "taobao index",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "https://h5.m.taobao.com/?sprefer=sypc00",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "tablet",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -163
          },
          "misMatchPercentage": "0.72",
          "analysisTime": 66
        },
        "diffImage": "..\\bitmaps_test\\20190331-191351\\failed_diff_taobao_taobao_index_0_document_1_tablet.png"
      },
      "status": "fail"
    }
  ],
  "id": "taobao"
});