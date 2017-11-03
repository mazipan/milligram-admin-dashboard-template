function renderChartBar() {
  var chart = new FusionCharts({
    "type": "column2d",
    "renderAt": "chartBarContainer",
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
  chart.render();
}

function renderChartPie() {
  var chart = new FusionCharts({
    "type": "pie3d",
    "renderAt": "chartPieContainer",
    "width": "500",
    "height": "300",
    "dataFormat": "json",
    "dataSource": {
      "chart": {
        "caption": "Sales Per Employee for 2014",
        "animation": "1",
        "formatnumberscale": "1",
        "decimals": "0",
        "numberprefix": "$",
        "pieslicedepth": "30",
        "startingangle": "125",
        "showborder": "1",
        "baseFontSize": "7",
        "baseFontColor": "000000",
        "bgColor": "#ffffff",
        "bgAlpha": "100",
        "bgRatio": "100",
        "canvasBgColor": "#ffffff",
        "canvasBgAlpha": "100",
        "canvasBgRatio": "100",
        "canvasBorderColor": "FFFFFF",
        "canvasBorderThickness": "1",
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
          "label": "Leverling",
          "value": "100524",
          "issliced": "1"
        },
        {
          "label": "Fuller",
          "value": "87790",
          "issliced": "1"
        },
        {
          "label": "Davolio",
          "value": "81898",
          "issliced": "0"
        },
        {
          "label": "Peacock",
          "value": "76438",
          "issliced": "0"
        },
        {
          "label": "King",
          "value": "57430",
          "issliced": "0"
        },
        {
          "label": "Callahan",
          "value": "55091",
          "issliced": "0"
        },
        {
          "label": "Dodsworth",
          "value": "43962",
          "issliced": "0"
        },
        {
          "label": "Suyama",
          "value": "22474",
          "issliced": "0"
        },
        {
          "label": "Buchanan",
          "value": "21637",
          "issliced": "0"
        }
      ]
    }
  });
  chart.render();
}

FusionCharts.ready(function () {
  renderChartBar();
  renderChartPie();
})