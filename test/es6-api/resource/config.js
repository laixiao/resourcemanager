var fs = require("fs");

exports.groups = { "preload": ["bg_jpg"] };
exports.alias = { "bg_jpg": "assets/bg.jpg" };
exports.filter = function (p,plugins) {
    var ext = p.substr(p.lastIndexOf(".") + 1);
	var type;
    switch (ext) {
        case "json":
			if (p.indexOf("sheet") >= 0){
				type = "sheet";
			}
			else{
				type = "json";
			}
			break;
        case "png":
        case "jpg":
            type = "image";
			break;
		case "fnt":
			type = "font";
			break;
    }
	var url = plugins.crc32(p);
	return {url,type}

}
exports.resources = {
	"assets": {
		"bg.jpg": {
			"url": "assets/bg.jpg",
			"type": "image"
		},
		"egret_icon.png": {
			"url": "assets/egret_icon.png",
			"type": "image"
		},
		"armature": {
			"skeleton.json": {
				"url": "assets/armature/skeleton.json",
				"type": "json"
			},
			"texture.json": {
				"url": "assets/armature/texture.json",
				"type": "json"
			},
			"texture.png": {
				"url": "assets/armature/texture.png",
				"type": "image"
			}
		},
		"font": {
			"font.fnt": {
				"url": "assets/font/font.fnt",
				"type": "font"
			},
			"font.png": {
				"url": "assets/font/font.png",
				"type": "image"
			}
		},
		"sheet": {
			"sheet1.json": {
				"url": "assets/sheet/sheet1.json",
				"type": "json"
			},
			"sheet1.png": {
				"url": "assets/sheet/sheet1.png",
				"type": "image"
			}
		}
	}
}

