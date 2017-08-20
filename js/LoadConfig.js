var widgetJS = '../kseniya/widget/kseniaPodHeroBanner/js/kseniaPodHeroBanner';

var LoadConfig = (function() {

    var widgetClass = "kseniaPodHeroBanner";

    var widgetCSSClass = "." + widgetClass;
    var cssPath = "../kseniya/widget/kseniaPodHeroBanner/less/widget.css";
    var lessPath = "../kseniya/widget/kseniaPodHeroBanner/less/widget.less";
    var widgetJSON = "widget.json";

    console.log("LoadConfig loaded");

    return {
        widgetJSON : widgetJSON,
        widgetClass : widgetClass,
        widgetCSSClass : widgetCSSClass,
        cssPath : cssPath,
        lessPath : lessPath,
        widgetJS : widgetJS
    }

}());


