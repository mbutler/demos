/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar canvas = document.getElementById(\"renderCanvas\"); // Get the canvas element\nvar engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine\n\nfunction createScene() {\n    var scene = new BABYLON.Scene(engine);\n    scene.clearColor = BABYLON.Color3(0, 0, 0, 0);\n\n    var camera = new BABYLON.ArcRotateCamera(\"camera\", -Math.PI / 2, Math.PI / 2.5, 3, new BABYLON.Vector3(0, 0, 0));\n    camera.attachControl(canvas, true);\n    var light = new BABYLON.HemisphericLight(\"light\", new BABYLON.Vector3(0, 0, 0));\n\n    var car = createCar(scene);\n    car.rotation.x = -Math.PI / 2;\n\n    BABYLON.SceneLoader.ImportMeshAsync(\"him\", \"../dist/scenes/\", \"dude.babylon\", scene).then(function (result) {\n        var dude = result.meshes[0];\n        dude.scaling = new BABYLON.Vector3(0.01, 0.01, 0.01);\n        dude.position.x = 1;\n        dude.movePOV(0, 0, 1);\n\n        scene.beginAnimation(result.skeletons[0], 0, 100, true, 1.0);\n    });\n\n    return scene;\n}\n\nfunction createCar(scene) {\n    //base\n    var outline = [new BABYLON.Vector3(-0.3, 0, -0.1), new BABYLON.Vector3(0.2, 0, -0.1)];\n\n    //curved front\n    for (var i = 0; i < 20; i++) {\n        outline.push(new BABYLON.Vector3(0.2 * Math.cos(i * Math.PI / 40), 0, 0.2 * Math.sin(i * Math.PI / 40) - 0.1));\n    }\n\n    //top\n    outline.push(new BABYLON.Vector3(0, 0, 0.1));\n    outline.push(new BABYLON.Vector3(-0.3, 0, 0.1));\n\n    //back formed automatically\n\n    //car face UVs\n    var faceUV = [];\n    faceUV[0] = new BABYLON.Vector4(0, 0.5, 0.38, 1);\n    faceUV[1] = new BABYLON.Vector4(0, 0, 1, 0.5);\n    faceUV[2] = new BABYLON.Vector4(0.38, 1, 0, 0.5);\n\n    //car material\n    var carMat = new BABYLON.StandardMaterial(\"carMat\");\n    carMat.diffuseTexture = new BABYLON.Texture(\"https://assets.babylonjs.com/environments/car.png\");\n\n    var car = BABYLON.MeshBuilder.ExtrudePolygon(\"car\", {\n        shape: outline,\n        depth: 0.2,\n        faceUV: faceUV,\n        wrap: true\n    });\n    car.material = carMat;\n\n    //wheel face UVs\n    var wheelUV = [];\n    wheelUV[0] = new BABYLON.Vector4(0, 0, 1, 1);\n    wheelUV[1] = new BABYLON.Vector4(0, 0.5, 0, 0.5);\n    wheelUV[2] = new BABYLON.Vector4(0, 0, 1, 1);\n\n    //car material\n    var wheelMat = new BABYLON.StandardMaterial(\"wheelMat\");\n    wheelMat.diffuseTexture = new BABYLON.Texture(\"https://assets.babylonjs.com/environments/wheel.png\");\n\n    var wheelRB = BABYLON.MeshBuilder.CreateCylinder(\"wheelRB\", {\n        diameter: 0.125,\n        height: 0.05\n    });\n    wheelRB.material = wheelMat;\n\n    wheelRB.parent = car;\n    wheelRB.position.z = -0.1;\n    wheelRB.position.x = -0.2;\n    wheelRB.position.y = 0.035;\n\n    var wheelRF = wheelRB.clone(\"wheelRF\");\n    wheelRF.position.x = 0.1;\n\n    var wheelLB = wheelRB.clone(\"wheelLB\");\n    wheelLB.position.y = -0.2 - 0.035;\n\n    var wheelLF = wheelRF.clone(\"wheelLF\");\n    wheelLF.position.y = -0.2 - 0.035;\n\n    //Animate the Wheels\n    var animWheel = new BABYLON.Animation(\"wheelAnimation\", \"rotation.y\", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);\n\n    var wheelKeys = [];\n\n    //At the animation key 0, the value of rotation.y is 0\n    wheelKeys.push({\n        frame: 0,\n        value: 0\n    });\n\n    //At the animation key 30, (after 1 sec since animation fps = 30) the value of rotation.y is 2PI for a complete rotation\n    wheelKeys.push({\n        frame: 30,\n        value: 2 * Math.PI\n    });\n\n    //set the keys\n    animWheel.setKeys(wheelKeys);\n\n    //Link this animation to a wheel\n    wheelRB.animations = [animWheel];\n    wheelLB.animations = [animWheel];\n    wheelLF.animations = [animWheel];\n    wheelRF.animations = [animWheel];\n\n    scene.beginAnimation(wheelRB, 0, 30, true);\n    scene.beginAnimation(wheelRF, 0, 30, true);\n    scene.beginAnimation(wheelLB, 0, 30, true);\n    scene.beginAnimation(wheelLF, 0, 30, true);\n\n    return car;\n}\n\nvar scene = createScene();\n\n// Register a render loop to repeatedly render the scene\nengine.runRenderLoop(function () {\n    scene.render();\n});\n\n// Watch for browser/canvas resize events\nwindow.addEventListener(\"resize\", function () {\n    engine.resize();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });