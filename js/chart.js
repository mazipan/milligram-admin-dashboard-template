window.onload = function () {
  
}
FusionCharts.ready(function () {
  var revenueChart = new FusionCharts({
    "type": "column2d",
    "renderAt": "chartContainer",
    "width": "500",
    "height": "300",
    "dataFormat": "json",
    "dataSource": {
      "chart": {
        "caption": "Monthly revenue for last year",
        "subCaption": "Harry's SuperMart",
        "xAxisName": "Month",
        "yAxisName": "Revenues (In USD)",
        "baseFontSize": "7",
        "baseFontColor": "000000",
        "showvalues": "1",
        "interactiveLegend": "1",
        "legendPosition": "RIGHT",
        "legendBgColor": "#ffffff",
        "legendBgAlpha": "100",
        "legendNumColumns": "1",
        "legendScrollBgColor": "#ffffff",
        "legendScrollBarColor": "#707070",
        "legendScrollBtnColor": "#707070",
        "bgColor": "#ffffff",
        "bgAlpha": "100",
        "bgRatio": "100",
        "canvasBgColor": "#ffffff",
        "canvasBgAlpha": "100",
        "canvasBgRatio": "100",
        "canvasBorderColor": "FFFFFF",
        "canvasBorderThickness": "1",
        "numDivLines": "4",
        "numVDivLines": "3",
        "divLineColor": "FFFFFF",
        "divLineThickness": "1",
        "divLineAlpha": "50",
        "lineThickness": "1",
        "showAlternateHGridColor": "0",
        "outCnvBaseFontColor": "707070",
        "showBorder": "1",
        "toolTipBgColor": "#ffffff",
        "paletteColors": "#de002c, #a72edb, #87cf02, #0091d4",
        "plotGradientColor": ""
      },
      "data": [
        {
          "label": "Jan",
          "value": "420000"
        },
        {
          "label": "Feb",
          "value": "810000"
        },
        {
          "label": "Mar",
          "value": "720000"
        },
        {
          "label": "Apr",
          "value": "550000"
        },
        {
          "label": "May",
          "value": "910000"
        },
        {
          "label": "Jun",
          "value": "510000"
        },
        {
          "label": "Jul",
          "value": "680000"
        },
        {
          "label": "Aug",
          "value": "620000"
        },
        {
          "label": "Sep",
          "value": "610000"
        },
        {
          "label": "Oct",
          "value": "490000"
        },
        {
          "label": "Nov",
          "value": "900000"
        },
        {
          "label": "Dec",
          "value": "730000"
        }
      ]
    }
  });
  revenueChart.render();
})