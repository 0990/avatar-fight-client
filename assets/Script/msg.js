/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.cmsg = (function() {

    /**
     * Namespace cmsg.
     * @exports cmsg
     * @namespace
     */
    var cmsg = {};

    cmsg.ReqLogin = (function() {

        /**
         * Properties of a ReqLogin.
         * @memberof cmsg
         * @interface IReqLogin
         * @property {string|null} [token] ReqLogin token
         */

        /**
         * Constructs a new ReqLogin.
         * @memberof cmsg
         * @classdesc Represents a ReqLogin.
         * @implements IReqLogin
         * @constructor
         * @param {cmsg.IReqLogin=} [properties] Properties to set
         */
        function ReqLogin(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqLogin token.
         * @member {string} token
         * @memberof cmsg.ReqLogin
         * @instance
         */
        ReqLogin.prototype.token = "";

        /**
         * Creates a new ReqLogin instance using the specified properties.
         * @function create
         * @memberof cmsg.ReqLogin
         * @static
         * @param {cmsg.IReqLogin=} [properties] Properties to set
         * @returns {cmsg.ReqLogin} ReqLogin instance
         */
        ReqLogin.create = function create(properties) {
            return new ReqLogin(properties);
        };

        /**
         * Encodes the specified ReqLogin message. Does not implicitly {@link cmsg.ReqLogin.verify|verify} messages.
         * @function encode
         * @memberof cmsg.ReqLogin
         * @static
         * @param {cmsg.IReqLogin} message ReqLogin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqLogin.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.token != null && message.hasOwnProperty("token"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
            return writer;
        };

        /**
         * Encodes the specified ReqLogin message, length delimited. Does not implicitly {@link cmsg.ReqLogin.verify|verify} messages.
         * @function encodeDelimited
         * @memberof cmsg.ReqLogin
         * @static
         * @param {cmsg.IReqLogin} message ReqLogin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqLogin.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqLogin message from the specified reader or buffer.
         * @function decode
         * @memberof cmsg.ReqLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {cmsg.ReqLogin} ReqLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqLogin.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cmsg.ReqLogin();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.token = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReqLogin message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof cmsg.ReqLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {cmsg.ReqLogin} ReqLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqLogin.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqLogin message.
         * @function verify
         * @memberof cmsg.ReqLogin
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqLogin.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            return null;
        };

        /**
         * Creates a ReqLogin message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof cmsg.ReqLogin
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {cmsg.ReqLogin} ReqLogin
         */
        ReqLogin.fromObject = function fromObject(object) {
            if (object instanceof $root.cmsg.ReqLogin)
                return object;
            var message = new $root.cmsg.ReqLogin();
            if (object.token != null)
                message.token = String(object.token);
            return message;
        };

        /**
         * Creates a plain object from a ReqLogin message. Also converts values to other types if specified.
         * @function toObject
         * @memberof cmsg.ReqLogin
         * @static
         * @param {cmsg.ReqLogin} message ReqLogin
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqLogin.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.token = "";
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            return object;
        };

        /**
         * Converts this ReqLogin to JSON.
         * @function toJSON
         * @memberof cmsg.ReqLogin
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqLogin.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqLogin;
    })();

    cmsg.RespLogin = (function() {

        /**
         * Properties of a RespLogin.
         * @memberof cmsg
         * @interface IRespLogin
         * @property {cmsg.RespLogin.Error|null} [err] RespLogin err
         * @property {number|Long|null} [userID] RespLogin userID
         * @property {string|null} [token] RespLogin token
         * @property {boolean|null} [inGame] RespLogin inGame
         */

        /**
         * Constructs a new RespLogin.
         * @memberof cmsg
         * @classdesc Represents a RespLogin.
         * @implements IRespLogin
         * @constructor
         * @param {cmsg.IRespLogin=} [properties] Properties to set
         */
        function RespLogin(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RespLogin err.
         * @member {cmsg.RespLogin.Error} err
         * @memberof cmsg.RespLogin
         * @instance
         */
        RespLogin.prototype.err = 0;

        /**
         * RespLogin userID.
         * @member {number|Long} userID
         * @memberof cmsg.RespLogin
         * @instance
         */
        RespLogin.prototype.userID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * RespLogin token.
         * @member {string} token
         * @memberof cmsg.RespLogin
         * @instance
         */
        RespLogin.prototype.token = "";

        /**
         * RespLogin inGame.
         * @member {boolean} inGame
         * @memberof cmsg.RespLogin
         * @instance
         */
        RespLogin.prototype.inGame = false;

        /**
         * Creates a new RespLogin instance using the specified properties.
         * @function create
         * @memberof cmsg.RespLogin
         * @static
         * @param {cmsg.IRespLogin=} [properties] Properties to set
         * @returns {cmsg.RespLogin} RespLogin instance
         */
        RespLogin.create = function create(properties) {
            return new RespLogin(properties);
        };

        /**
         * Encodes the specified RespLogin message. Does not implicitly {@link cmsg.RespLogin.verify|verify} messages.
         * @function encode
         * @memberof cmsg.RespLogin
         * @static
         * @param {cmsg.IRespLogin} message RespLogin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespLogin.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.err != null && message.hasOwnProperty("err"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.err);
            if (message.userID != null && message.hasOwnProperty("userID"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.userID);
            if (message.token != null && message.hasOwnProperty("token"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.token);
            if (message.inGame != null && message.hasOwnProperty("inGame"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.inGame);
            return writer;
        };

        /**
         * Encodes the specified RespLogin message, length delimited. Does not implicitly {@link cmsg.RespLogin.verify|verify} messages.
         * @function encodeDelimited
         * @memberof cmsg.RespLogin
         * @static
         * @param {cmsg.IRespLogin} message RespLogin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespLogin.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespLogin message from the specified reader or buffer.
         * @function decode
         * @memberof cmsg.RespLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {cmsg.RespLogin} RespLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespLogin.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cmsg.RespLogin();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.err = reader.int32();
                    break;
                case 2:
                    message.userID = reader.uint64();
                    break;
                case 3:
                    message.token = reader.string();
                    break;
                case 4:
                    message.inGame = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RespLogin message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof cmsg.RespLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {cmsg.RespLogin} RespLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespLogin.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RespLogin message.
         * @function verify
         * @memberof cmsg.RespLogin
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RespLogin.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.err != null && message.hasOwnProperty("err"))
                switch (message.err) {
                default:
                    return "err: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.userID != null && message.hasOwnProperty("userID"))
                if (!$util.isInteger(message.userID) && !(message.userID && $util.isInteger(message.userID.low) && $util.isInteger(message.userID.high)))
                    return "userID: integer|Long expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            if (message.inGame != null && message.hasOwnProperty("inGame"))
                if (typeof message.inGame !== "boolean")
                    return "inGame: boolean expected";
            return null;
        };

        /**
         * Creates a RespLogin message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof cmsg.RespLogin
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {cmsg.RespLogin} RespLogin
         */
        RespLogin.fromObject = function fromObject(object) {
            if (object instanceof $root.cmsg.RespLogin)
                return object;
            var message = new $root.cmsg.RespLogin();
            switch (object.err) {
            case "Invalid":
            case 0:
                message.err = 0;
                break;
            case "RPCError":
            case 1:
                message.err = 1;
                break;
            }
            if (object.userID != null)
                if ($util.Long)
                    (message.userID = $util.Long.fromValue(object.userID)).unsigned = true;
                else if (typeof object.userID === "string")
                    message.userID = parseInt(object.userID, 10);
                else if (typeof object.userID === "number")
                    message.userID = object.userID;
                else if (typeof object.userID === "object")
                    message.userID = new $util.LongBits(object.userID.low >>> 0, object.userID.high >>> 0).toNumber(true);
            if (object.token != null)
                message.token = String(object.token);
            if (object.inGame != null)
                message.inGame = Boolean(object.inGame);
            return message;
        };

        /**
         * Creates a plain object from a RespLogin message. Also converts values to other types if specified.
         * @function toObject
         * @memberof cmsg.RespLogin
         * @static
         * @param {cmsg.RespLogin} message RespLogin
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RespLogin.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.err = options.enums === String ? "Invalid" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.userID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.userID = options.longs === String ? "0" : 0;
                object.token = "";
                object.inGame = false;
            }
            if (message.err != null && message.hasOwnProperty("err"))
                object.err = options.enums === String ? $root.cmsg.RespLogin.Error[message.err] : message.err;
            if (message.userID != null && message.hasOwnProperty("userID"))
                if (typeof message.userID === "number")
                    object.userID = options.longs === String ? String(message.userID) : message.userID;
                else
                    object.userID = options.longs === String ? $util.Long.prototype.toString.call(message.userID) : options.longs === Number ? new $util.LongBits(message.userID.low >>> 0, message.userID.high >>> 0).toNumber(true) : message.userID;
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            if (message.inGame != null && message.hasOwnProperty("inGame"))
                object.inGame = message.inGame;
            return object;
        };

        /**
         * Converts this RespLogin to JSON.
         * @function toJSON
         * @memberof cmsg.RespLogin
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RespLogin.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Error enum.
         * @name cmsg.RespLogin.Error
         * @enum {string}
         * @property {number} Invalid=0 Invalid value
         * @property {number} RPCError=1 RPCError value
         */
        RespLogin.Error = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Invalid"] = 0;
            values[valuesById[1] = "RPCError"] = 1;
            return values;
        })();

        return RespLogin;
    })();

    cmsg.ReqJoinGame = (function() {

        /**
         * Properties of a ReqJoinGame.
         * @memberof cmsg
         * @interface IReqJoinGame
         * @property {string|null} [nickname] ReqJoinGame nickname
         */

        /**
         * Constructs a new ReqJoinGame.
         * @memberof cmsg
         * @classdesc Represents a ReqJoinGame.
         * @implements IReqJoinGame
         * @constructor
         * @param {cmsg.IReqJoinGame=} [properties] Properties to set
         */
        function ReqJoinGame(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqJoinGame nickname.
         * @member {string} nickname
         * @memberof cmsg.ReqJoinGame
         * @instance
         */
        ReqJoinGame.prototype.nickname = "";

        /**
         * Creates a new ReqJoinGame instance using the specified properties.
         * @function create
         * @memberof cmsg.ReqJoinGame
         * @static
         * @param {cmsg.IReqJoinGame=} [properties] Properties to set
         * @returns {cmsg.ReqJoinGame} ReqJoinGame instance
         */
        ReqJoinGame.create = function create(properties) {
            return new ReqJoinGame(properties);
        };

        /**
         * Encodes the specified ReqJoinGame message. Does not implicitly {@link cmsg.ReqJoinGame.verify|verify} messages.
         * @function encode
         * @memberof cmsg.ReqJoinGame
         * @static
         * @param {cmsg.IReqJoinGame} message ReqJoinGame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqJoinGame.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.nickname);
            return writer;
        };

        /**
         * Encodes the specified ReqJoinGame message, length delimited. Does not implicitly {@link cmsg.ReqJoinGame.verify|verify} messages.
         * @function encodeDelimited
         * @memberof cmsg.ReqJoinGame
         * @static
         * @param {cmsg.IReqJoinGame} message ReqJoinGame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqJoinGame.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqJoinGame message from the specified reader or buffer.
         * @function decode
         * @memberof cmsg.ReqJoinGame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {cmsg.ReqJoinGame} ReqJoinGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqJoinGame.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cmsg.ReqJoinGame();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.nickname = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReqJoinGame message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof cmsg.ReqJoinGame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {cmsg.ReqJoinGame} ReqJoinGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqJoinGame.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqJoinGame message.
         * @function verify
         * @memberof cmsg.ReqJoinGame
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqJoinGame.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                if (!$util.isString(message.nickname))
                    return "nickname: string expected";
            return null;
        };

        /**
         * Creates a ReqJoinGame message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof cmsg.ReqJoinGame
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {cmsg.ReqJoinGame} ReqJoinGame
         */
        ReqJoinGame.fromObject = function fromObject(object) {
            if (object instanceof $root.cmsg.ReqJoinGame)
                return object;
            var message = new $root.cmsg.ReqJoinGame();
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            return message;
        };

        /**
         * Creates a plain object from a ReqJoinGame message. Also converts values to other types if specified.
         * @function toObject
         * @memberof cmsg.ReqJoinGame
         * @static
         * @param {cmsg.ReqJoinGame} message ReqJoinGame
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqJoinGame.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.nickname = "";
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            return object;
        };

        /**
         * Converts this ReqJoinGame to JSON.
         * @function toJSON
         * @memberof cmsg.ReqJoinGame
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqJoinGame.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqJoinGame;
    })();

    cmsg.RespJoinGame = (function() {

        /**
         * Properties of a RespJoinGame.
         * @memberof cmsg
         * @interface IRespJoinGame
         * @property {cmsg.RespJoinGame.Error|null} [err] RespJoinGame err
         * @property {string|null} [nickname] RespJoinGame nickname
         */

        /**
         * Constructs a new RespJoinGame.
         * @memberof cmsg
         * @classdesc Represents a RespJoinGame.
         * @implements IRespJoinGame
         * @constructor
         * @param {cmsg.IRespJoinGame=} [properties] Properties to set
         */
        function RespJoinGame(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RespJoinGame err.
         * @member {cmsg.RespJoinGame.Error} err
         * @memberof cmsg.RespJoinGame
         * @instance
         */
        RespJoinGame.prototype.err = 0;

        /**
         * RespJoinGame nickname.
         * @member {string} nickname
         * @memberof cmsg.RespJoinGame
         * @instance
         */
        RespJoinGame.prototype.nickname = "";

        /**
         * Creates a new RespJoinGame instance using the specified properties.
         * @function create
         * @memberof cmsg.RespJoinGame
         * @static
         * @param {cmsg.IRespJoinGame=} [properties] Properties to set
         * @returns {cmsg.RespJoinGame} RespJoinGame instance
         */
        RespJoinGame.create = function create(properties) {
            return new RespJoinGame(properties);
        };

        /**
         * Encodes the specified RespJoinGame message. Does not implicitly {@link cmsg.RespJoinGame.verify|verify} messages.
         * @function encode
         * @memberof cmsg.RespJoinGame
         * @static
         * @param {cmsg.IRespJoinGame} message RespJoinGame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespJoinGame.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.err != null && message.hasOwnProperty("err"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.err);
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.nickname);
            return writer;
        };

        /**
         * Encodes the specified RespJoinGame message, length delimited. Does not implicitly {@link cmsg.RespJoinGame.verify|verify} messages.
         * @function encodeDelimited
         * @memberof cmsg.RespJoinGame
         * @static
         * @param {cmsg.IRespJoinGame} message RespJoinGame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespJoinGame.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespJoinGame message from the specified reader or buffer.
         * @function decode
         * @memberof cmsg.RespJoinGame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {cmsg.RespJoinGame} RespJoinGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespJoinGame.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cmsg.RespJoinGame();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.err = reader.int32();
                    break;
                case 2:
                    message.nickname = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RespJoinGame message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof cmsg.RespJoinGame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {cmsg.RespJoinGame} RespJoinGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespJoinGame.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RespJoinGame message.
         * @function verify
         * @memberof cmsg.RespJoinGame
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RespJoinGame.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.err != null && message.hasOwnProperty("err"))
                switch (message.err) {
                default:
                    return "err: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                if (!$util.isString(message.nickname))
                    return "nickname: string expected";
            return null;
        };

        /**
         * Creates a RespJoinGame message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof cmsg.RespJoinGame
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {cmsg.RespJoinGame} RespJoinGame
         */
        RespJoinGame.fromObject = function fromObject(object) {
            if (object instanceof $root.cmsg.RespJoinGame)
                return object;
            var message = new $root.cmsg.RespJoinGame();
            switch (object.err) {
            case "Invalid":
            case 0:
                message.err = 0;
                break;
            case "UserNotExisted":
            case 1:
                message.err = 1;
                break;
            case "AlreadyInGame":
            case 2:
                message.err = 2;
                break;
            }
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            return message;
        };

        /**
         * Creates a plain object from a RespJoinGame message. Also converts values to other types if specified.
         * @function toObject
         * @memberof cmsg.RespJoinGame
         * @static
         * @param {cmsg.RespJoinGame} message RespJoinGame
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RespJoinGame.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.err = options.enums === String ? "Invalid" : 0;
                object.nickname = "";
            }
            if (message.err != null && message.hasOwnProperty("err"))
                object.err = options.enums === String ? $root.cmsg.RespJoinGame.Error[message.err] : message.err;
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            return object;
        };

        /**
         * Converts this RespJoinGame to JSON.
         * @function toJSON
         * @memberof cmsg.RespJoinGame
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RespJoinGame.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Error enum.
         * @name cmsg.RespJoinGame.Error
         * @enum {string}
         * @property {number} Invalid=0 Invalid value
         * @property {number} UserNotExisted=1 UserNotExisted value
         * @property {number} AlreadyInGame=2 AlreadyInGame value
         */
        RespJoinGame.Error = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Invalid"] = 0;
            values[valuesById[1] = "UserNotExisted"] = 1;
            values[valuesById[2] = "AlreadyInGame"] = 2;
            return values;
        })();

        return RespJoinGame;
    })();

    cmsg.ReqEnterGame = (function() {

        /**
         * Properties of a ReqEnterGame.
         * @memberof cmsg
         * @interface IReqEnterGame
         */

        /**
         * Constructs a new ReqEnterGame.
         * @memberof cmsg
         * @classdesc Represents a ReqEnterGame.
         * @implements IReqEnterGame
         * @constructor
         * @param {cmsg.IReqEnterGame=} [properties] Properties to set
         */
        function ReqEnterGame(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ReqEnterGame instance using the specified properties.
         * @function create
         * @memberof cmsg.ReqEnterGame
         * @static
         * @param {cmsg.IReqEnterGame=} [properties] Properties to set
         * @returns {cmsg.ReqEnterGame} ReqEnterGame instance
         */
        ReqEnterGame.create = function create(properties) {
            return new ReqEnterGame(properties);
        };

        /**
         * Encodes the specified ReqEnterGame message. Does not implicitly {@link cmsg.ReqEnterGame.verify|verify} messages.
         * @function encode
         * @memberof cmsg.ReqEnterGame
         * @static
         * @param {cmsg.IReqEnterGame} message ReqEnterGame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqEnterGame.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified ReqEnterGame message, length delimited. Does not implicitly {@link cmsg.ReqEnterGame.verify|verify} messages.
         * @function encodeDelimited
         * @memberof cmsg.ReqEnterGame
         * @static
         * @param {cmsg.IReqEnterGame} message ReqEnterGame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqEnterGame.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqEnterGame message from the specified reader or buffer.
         * @function decode
         * @memberof cmsg.ReqEnterGame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {cmsg.ReqEnterGame} ReqEnterGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqEnterGame.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cmsg.ReqEnterGame();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReqEnterGame message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof cmsg.ReqEnterGame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {cmsg.ReqEnterGame} ReqEnterGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqEnterGame.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqEnterGame message.
         * @function verify
         * @memberof cmsg.ReqEnterGame
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqEnterGame.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a ReqEnterGame message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof cmsg.ReqEnterGame
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {cmsg.ReqEnterGame} ReqEnterGame
         */
        ReqEnterGame.fromObject = function fromObject(object) {
            if (object instanceof $root.cmsg.ReqEnterGame)
                return object;
            return new $root.cmsg.ReqEnterGame();
        };

        /**
         * Creates a plain object from a ReqEnterGame message. Also converts values to other types if specified.
         * @function toObject
         * @memberof cmsg.ReqEnterGame
         * @static
         * @param {cmsg.ReqEnterGame} message ReqEnterGame
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqEnterGame.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this ReqEnterGame to JSON.
         * @function toJSON
         * @memberof cmsg.ReqEnterGame
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqEnterGame.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqEnterGame;
    })();

    cmsg.RespEnterGame = (function() {

        /**
         * Properties of a RespEnterGame.
         * @memberof cmsg
         * @interface IRespEnterGame
         * @property {cmsg.RespEnterGame.IConfig|null} [config] RespEnterGame config
         * @property {number|null} [entityID] RespEnterGame entityID
         * @property {number|null} [gameLeftSec] RespEnterGame gameLeftSec
         * @property {boolean|null} [dead] RespEnterGame dead
         * @property {cmsg.RespEnterGame.Error|null} [err] RespEnterGame err
         */

        /**
         * Constructs a new RespEnterGame.
         * @memberof cmsg
         * @classdesc Represents a RespEnterGame.
         * @implements IRespEnterGame
         * @constructor
         * @param {cmsg.IRespEnterGame=} [properties] Properties to set
         */
        function RespEnterGame(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RespEnterGame config.
         * @member {cmsg.RespEnterGame.IConfig|null|undefined} config
         * @memberof cmsg.RespEnterGame
         * @instance
         */
        RespEnterGame.prototype.config = null;

        /**
         * RespEnterGame entityID.
         * @member {number} entityID
         * @memberof cmsg.RespEnterGame
         * @instance
         */
        RespEnterGame.prototype.entityID = 0;

        /**
         * RespEnterGame gameLeftSec.
         * @member {number} gameLeftSec
         * @memberof cmsg.RespEnterGame
         * @instance
         */
        RespEnterGame.prototype.gameLeftSec = 0;

        /**
         * RespEnterGame dead.
         * @member {boolean} dead
         * @memberof cmsg.RespEnterGame
         * @instance
         */
        RespEnterGame.prototype.dead = false;

        /**
         * RespEnterGame err.
         * @member {cmsg.RespEnterGame.Error} err
         * @memberof cmsg.RespEnterGame
         * @instance
         */
        RespEnterGame.prototype.err = 0;

        /**
         * Creates a new RespEnterGame instance using the specified properties.
         * @function create
         * @memberof cmsg.RespEnterGame
         * @static
         * @param {cmsg.IRespEnterGame=} [properties] Properties to set
         * @returns {cmsg.RespEnterGame} RespEnterGame instance
         */
        RespEnterGame.create = function create(properties) {
            return new RespEnterGame(properties);
        };

        /**
         * Encodes the specified RespEnterGame message. Does not implicitly {@link cmsg.RespEnterGame.verify|verify} messages.
         * @function encode
         * @memberof cmsg.RespEnterGame
         * @static
         * @param {cmsg.IRespEnterGame} message RespEnterGame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespEnterGame.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.config != null && message.hasOwnProperty("config"))
                $root.cmsg.RespEnterGame.Config.encode(message.config, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.entityID != null && message.hasOwnProperty("entityID"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.entityID);
            if (message.gameLeftSec != null && message.hasOwnProperty("gameLeftSec"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.gameLeftSec);
            if (message.dead != null && message.hasOwnProperty("dead"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.dead);
            if (message.err != null && message.hasOwnProperty("err"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.err);
            return writer;
        };

        /**
         * Encodes the specified RespEnterGame message, length delimited. Does not implicitly {@link cmsg.RespEnterGame.verify|verify} messages.
         * @function encodeDelimited
         * @memberof cmsg.RespEnterGame
         * @static
         * @param {cmsg.IRespEnterGame} message RespEnterGame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespEnterGame.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespEnterGame message from the specified reader or buffer.
         * @function decode
         * @memberof cmsg.RespEnterGame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {cmsg.RespEnterGame} RespEnterGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespEnterGame.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cmsg.RespEnterGame();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.config = $root.cmsg.RespEnterGame.Config.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.entityID = reader.int32();
                    break;
                case 3:
                    message.gameLeftSec = reader.int32();
                    break;
                case 4:
                    message.dead = reader.bool();
                    break;
                case 5:
                    message.err = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RespEnterGame message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof cmsg.RespEnterGame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {cmsg.RespEnterGame} RespEnterGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespEnterGame.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RespEnterGame message.
         * @function verify
         * @memberof cmsg.RespEnterGame
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RespEnterGame.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.config != null && message.hasOwnProperty("config")) {
                var error = $root.cmsg.RespEnterGame.Config.verify(message.config);
                if (error)
                    return "config." + error;
            }
            if (message.entityID != null && message.hasOwnProperty("entityID"))
                if (!$util.isInteger(message.entityID))
                    return "entityID: integer expected";
            if (message.gameLeftSec != null && message.hasOwnProperty("gameLeftSec"))
                if (!$util.isInteger(message.gameLeftSec))
                    return "gameLeftSec: integer expected";
            if (message.dead != null && message.hasOwnProperty("dead"))
                if (typeof message.dead !== "boolean")
                    return "dead: boolean expected";
            if (message.err != null && message.hasOwnProperty("err"))
                switch (message.err) {
                default:
                    return "err: enum value expected";
                case 0:
                    break;
                }
            return null;
        };

        /**
         * Creates a RespEnterGame message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof cmsg.RespEnterGame
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {cmsg.RespEnterGame} RespEnterGame
         */
        RespEnterGame.fromObject = function fromObject(object) {
            if (object instanceof $root.cmsg.RespEnterGame)
                return object;
            var message = new $root.cmsg.RespEnterGame();
            if (object.config != null) {
                if (typeof object.config !== "object")
                    throw TypeError(".cmsg.RespEnterGame.config: object expected");
                message.config = $root.cmsg.RespEnterGame.Config.fromObject(object.config);
            }
            if (object.entityID != null)
                message.entityID = object.entityID | 0;
            if (object.gameLeftSec != null)
                message.gameLeftSec = object.gameLeftSec | 0;
            if (object.dead != null)
                message.dead = Boolean(object.dead);
            switch (object.err) {
            case "Invalid":
            case 0:
                message.err = 0;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a RespEnterGame message. Also converts values to other types if specified.
         * @function toObject
         * @memberof cmsg.RespEnterGame
         * @static
         * @param {cmsg.RespEnterGame} message RespEnterGame
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RespEnterGame.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.config = null;
                object.entityID = 0;
                object.gameLeftSec = 0;
                object.dead = false;
                object.err = options.enums === String ? "Invalid" : 0;
            }
            if (message.config != null && message.hasOwnProperty("config"))
                object.config = $root.cmsg.RespEnterGame.Config.toObject(message.config, options);
            if (message.entityID != null && message.hasOwnProperty("entityID"))
                object.entityID = message.entityID;
            if (message.gameLeftSec != null && message.hasOwnProperty("gameLeftSec"))
                object.gameLeftSec = message.gameLeftSec;
            if (message.dead != null && message.hasOwnProperty("dead"))
                object.dead = message.dead;
            if (message.err != null && message.hasOwnProperty("err"))
                object.err = options.enums === String ? $root.cmsg.RespEnterGame.Error[message.err] : message.err;
            return object;
        };

        /**
         * Converts this RespEnterGame to JSON.
         * @function toJSON
         * @memberof cmsg.RespEnterGame
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RespEnterGame.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Error enum.
         * @name cmsg.RespEnterGame.Error
         * @enum {string}
         * @property {number} Invalid=0 Invalid value
         */
        RespEnterGame.Error = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Invalid"] = 0;
            return values;
        })();

        RespEnterGame.Config = (function() {

            /**
             * Properties of a Config.
             * @memberof cmsg.RespEnterGame
             * @interface IConfig
             * @property {number|null} [bulletLiveTime] Config bulletLiveTime
             * @property {number|null} [rotationDelta] Config rotationDelta
             * @property {number|null} [entitySpeed] Config entitySpeed
             * @property {number|null} [bulletSpeed] Config bulletSpeed
             * @property {number|null} [noticePosDuration] Config noticePosDuration
             * @property {number|null} [protectTime] Config protectTime
             * @property {number|null} [entityRadius] Config entityRadius
             */

            /**
             * Constructs a new Config.
             * @memberof cmsg.RespEnterGame
             * @classdesc Represents a Config.
             * @implements IConfig
             * @constructor
             * @param {cmsg.RespEnterGame.IConfig=} [properties] Properties to set
             */
            function Config(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Config bulletLiveTime.
             * @member {number} bulletLiveTime
             * @memberof cmsg.RespEnterGame.Config
             * @instance
             */
            Config.prototype.bulletLiveTime = 0;

            /**
             * Config rotationDelta.
             * @member {number} rotationDelta
             * @memberof cmsg.RespEnterGame.Config
             * @instance
             */
            Config.prototype.rotationDelta = 0;

            /**
             * Config entitySpeed.
             * @member {number} entitySpeed
             * @memberof cmsg.RespEnterGame.Config
             * @instance
             */
            Config.prototype.entitySpeed = 0;

            /**
             * Config bulletSpeed.
             * @member {number} bulletSpeed
             * @memberof cmsg.RespEnterGame.Config
             * @instance
             */
            Config.prototype.bulletSpeed = 0;

            /**
             * Config noticePosDuration.
             * @member {number} noticePosDuration
             * @memberof cmsg.RespEnterGame.Config
             * @instance
             */
            Config.prototype.noticePosDuration = 0;

            /**
             * Config protectTime.
             * @member {number} protectTime
             * @memberof cmsg.RespEnterGame.Config
             * @instance
             */
            Config.prototype.protectTime = 0;

            /**
             * Config entityRadius.
             * @member {number} entityRadius
             * @memberof cmsg.RespEnterGame.Config
             * @instance
             */
            Config.prototype.entityRadius = 0;

            /**
             * Creates a new Config instance using the specified properties.
             * @function create
             * @memberof cmsg.RespEnterGame.Config
             * @static
             * @param {cmsg.RespEnterGame.IConfig=} [properties] Properties to set
             * @returns {cmsg.RespEnterGame.Config} Config instance
             */
            Config.create = function create(properties) {
                return new Config(properties);
            };

            /**
             * Encodes the specified Config message. Does not implicitly {@link cmsg.RespEnterGame.Config.verify|verify} messages.
             * @function encode
             * @memberof cmsg.RespEnterGame.Config
             * @static
             * @param {cmsg.RespEnterGame.IConfig} message Config message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Config.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.bulletLiveTime != null && message.hasOwnProperty("bulletLiveTime"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.bulletLiveTime);
                if (message.rotationDelta != null && message.hasOwnProperty("rotationDelta"))
                    writer.uint32(/* id 2, wireType 5 =*/21).float(message.rotationDelta);
                if (message.entitySpeed != null && message.hasOwnProperty("entitySpeed"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.entitySpeed);
                if (message.bulletSpeed != null && message.hasOwnProperty("bulletSpeed"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.bulletSpeed);
                if (message.noticePosDuration != null && message.hasOwnProperty("noticePosDuration"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.noticePosDuration);
                if (message.protectTime != null && message.hasOwnProperty("protectTime"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.protectTime);
                if (message.entityRadius != null && message.hasOwnProperty("entityRadius"))
                    writer.uint32(/* id 7, wireType 0 =*/56).int32(message.entityRadius);
                return writer;
            };

            /**
             * Encodes the specified Config message, length delimited. Does not implicitly {@link cmsg.RespEnterGame.Config.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cmsg.RespEnterGame.Config
             * @static
             * @param {cmsg.RespEnterGame.IConfig} message Config message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Config.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Config message from the specified reader or buffer.
             * @function decode
             * @memberof cmsg.RespEnterGame.Config
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cmsg.RespEnterGame.Config} Config
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Config.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cmsg.RespEnterGame.Config();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.bulletLiveTime = reader.int32();
                        break;
                    case 2:
                        message.rotationDelta = reader.float();
                        break;
                    case 3:
                        message.entitySpeed = reader.int32();
                        break;
                    case 4:
                        message.bulletSpeed = reader.int32();
                        break;
                    case 5:
                        message.noticePosDuration = reader.int32();
                        break;
                    case 6:
                        message.protectTime = reader.int32();
                        break;
                    case 7:
                        message.entityRadius = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Config message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cmsg.RespEnterGame.Config
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cmsg.RespEnterGame.Config} Config
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Config.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Config message.
             * @function verify
             * @memberof cmsg.RespEnterGame.Config
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Config.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.bulletLiveTime != null && message.hasOwnProperty("bulletLiveTime"))
                    if (!$util.isInteger(message.bulletLiveTime))
                        return "bulletLiveTime: integer expected";
                if (message.rotationDelta != null && message.hasOwnProperty("rotationDelta"))
                    if (typeof message.rotationDelta !== "number")
                        return "rotationDelta: number expected";
                if (message.entitySpeed != null && message.hasOwnProperty("entitySpeed"))
                    if (!$util.isInteger(message.entitySpeed))
                        return "entitySpeed: integer expected";
                if (message.bulletSpeed != null && message.hasOwnProperty("bulletSpeed"))
                    if (!$util.isInteger(message.bulletSpeed))
                        return "bulletSpeed: integer expected";
                if (message.noticePosDuration != null && message.hasOwnProperty("noticePosDuration"))
                    if (!$util.isInteger(message.noticePosDuration))
                        return "noticePosDuration: integer expected";
                if (message.protectTime != null && message.hasOwnProperty("protectTime"))
                    if (!$util.isInteger(message.protectTime))
                        return "protectTime: integer expected";
                if (message.entityRadius != null && message.hasOwnProperty("entityRadius"))
                    if (!$util.isInteger(message.entityRadius))
                        return "entityRadius: integer expected";
                return null;
            };

            /**
             * Creates a Config message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cmsg.RespEnterGame.Config
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cmsg.RespEnterGame.Config} Config
             */
            Config.fromObject = function fromObject(object) {
                if (object instanceof $root.cmsg.RespEnterGame.Config)
                    return object;
                var message = new $root.cmsg.RespEnterGame.Config();
                if (object.bulletLiveTime != null)
                    message.bulletLiveTime = object.bulletLiveTime | 0;
                if (object.rotationDelta != null)
                    message.rotationDelta = Number(object.rotationDelta);
                if (object.entitySpeed != null)
                    message.entitySpeed = object.entitySpeed | 0;
                if (object.bulletSpeed != null)
                    message.bulletSpeed = object.bulletSpeed | 0;
                if (object.noticePosDuration != null)
                    message.noticePosDuration = object.noticePosDuration | 0;
                if (object.protectTime != null)
                    message.protectTime = object.protectTime | 0;
                if (object.entityRadius != null)
                    message.entityRadius = object.entityRadius | 0;
                return message;
            };

            /**
             * Creates a plain object from a Config message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cmsg.RespEnterGame.Config
             * @static
             * @param {cmsg.RespEnterGame.Config} message Config
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Config.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.bulletLiveTime = 0;
                    object.rotationDelta = 0;
                    object.entitySpeed = 0;
                    object.bulletSpeed = 0;
                    object.noticePosDuration = 0;
                    object.protectTime = 0;
                    object.entityRadius = 0;
                }
                if (message.bulletLiveTime != null && message.hasOwnProperty("bulletLiveTime"))
                    object.bulletLiveTime = message.bulletLiveTime;
                if (message.rotationDelta != null && message.hasOwnProperty("rotationDelta"))
                    object.rotationDelta = options.json && !isFinite(message.rotationDelta) ? String(message.rotationDelta) : message.rotationDelta;
                if (message.entitySpeed != null && message.hasOwnProperty("entitySpeed"))
                    object.entitySpeed = message.entitySpeed;
                if (message.bulletSpeed != null && message.hasOwnProperty("bulletSpeed"))
                    object.bulletSpeed = message.bulletSpeed;
                if (message.noticePosDuration != null && message.hasOwnProperty("noticePosDuration"))
                    object.noticePosDuration = message.noticePosDuration;
                if (message.protectTime != null && message.hasOwnProperty("protectTime"))
                    object.protectTime = message.protectTime;
                if (message.entityRadius != null && message.hasOwnProperty("entityRadius"))
                    object.entityRadius = message.entityRadius;
                return object;
            };

            /**
             * Converts this Config to JSON.
             * @function toJSON
             * @memberof cmsg.RespEnterGame.Config
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Config.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Config;
        })();

        return RespEnterGame;
    })();

    cmsg.Rank = (function() {

        /**
         * Properties of a Rank.
         * @memberof cmsg
         * @interface IRank
         * @property {Array.<cmsg.Rank.IItem>|null} [list] Rank list
         */

        /**
         * Constructs a new Rank.
         * @memberof cmsg
         * @classdesc Represents a Rank.
         * @implements IRank
         * @constructor
         * @param {cmsg.IRank=} [properties] Properties to set
         */
        function Rank(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Rank list.
         * @member {Array.<cmsg.Rank.IItem>} list
         * @memberof cmsg.Rank
         * @instance
         */
        Rank.prototype.list = $util.emptyArray;

        /**
         * Creates a new Rank instance using the specified properties.
         * @function create
         * @memberof cmsg.Rank
         * @static
         * @param {cmsg.IRank=} [properties] Properties to set
         * @returns {cmsg.Rank} Rank instance
         */
        Rank.create = function create(properties) {
            return new Rank(properties);
        };

        /**
         * Encodes the specified Rank message. Does not implicitly {@link cmsg.Rank.verify|verify} messages.
         * @function encode
         * @memberof cmsg.Rank
         * @static
         * @param {cmsg.IRank} message Rank message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Rank.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.cmsg.Rank.Item.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Rank message, length delimited. Does not implicitly {@link cmsg.Rank.verify|verify} messages.
         * @function encodeDelimited
         * @memberof cmsg.Rank
         * @static
         * @param {cmsg.IRank} message Rank message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Rank.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Rank message from the specified reader or buffer.
         * @function decode
         * @memberof cmsg.Rank
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {cmsg.Rank} Rank
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Rank.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cmsg.Rank();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.list && message.list.length))
                        message.list = [];
                    message.list.push($root.cmsg.Rank.Item.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Rank message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof cmsg.Rank
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {cmsg.Rank} Rank
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Rank.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Rank message.
         * @function verify
         * @memberof cmsg.Rank
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Rank.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.cmsg.Rank.Item.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Rank message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof cmsg.Rank
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {cmsg.Rank} Rank
         */
        Rank.fromObject = function fromObject(object) {
            if (object instanceof $root.cmsg.Rank)
                return object;
            var message = new $root.cmsg.Rank();
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".cmsg.Rank.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".cmsg.Rank.list: object expected");
                    message.list[i] = $root.cmsg.Rank.Item.fromObject(object.list[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Rank message. Also converts values to other types if specified.
         * @function toObject
         * @memberof cmsg.Rank
         * @static
         * @param {cmsg.Rank} message Rank
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Rank.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.cmsg.Rank.Item.toObject(message.list[j], options);
            }
            return object;
        };

        /**
         * Converts this Rank to JSON.
         * @function toJSON
         * @memberof cmsg.Rank
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Rank.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        Rank.Item = (function() {

            /**
             * Properties of an Item.
             * @memberof cmsg.Rank
             * @interface IItem
             * @property {number|null} [entityID] Item entityID
             * @property {number|null} [score] Item score
             * @property {number|null} [rank] Item rank
             * @property {number|null} [killCount] Item killCount
             * @property {string|null} [headImgUrl] Item headImgUrl
             * @property {string|null} [nickname] Item nickname
             */

            /**
             * Constructs a new Item.
             * @memberof cmsg.Rank
             * @classdesc Represents an Item.
             * @implements IItem
             * @constructor
             * @param {cmsg.Rank.IItem=} [properties] Properties to set
             */
            function Item(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Item entityID.
             * @member {number} entityID
             * @memberof cmsg.Rank.Item
             * @instance
             */
            Item.prototype.entityID = 0;

            /**
             * Item score.
             * @member {number} score
             * @memberof cmsg.Rank.Item
             * @instance
             */
            Item.prototype.score = 0;

            /**
             * Item rank.
             * @member {number} rank
             * @memberof cmsg.Rank.Item
             * @instance
             */
            Item.prototype.rank = 0;

            /**
             * Item killCount.
             * @member {number} killCount
             * @memberof cmsg.Rank.Item
             * @instance
             */
            Item.prototype.killCount = 0;

            /**
             * Item headImgUrl.
             * @member {string} headImgUrl
             * @memberof cmsg.Rank.Item
             * @instance
             */
            Item.prototype.headImgUrl = "";

            /**
             * Item nickname.
             * @member {string} nickname
             * @memberof cmsg.Rank.Item
             * @instance
             */
            Item.prototype.nickname = "";

            /**
             * Creates a new Item instance using the specified properties.
             * @function create
             * @memberof cmsg.Rank.Item
             * @static
             * @param {cmsg.Rank.IItem=} [properties] Properties to set
             * @returns {cmsg.Rank.Item} Item instance
             */
            Item.create = function create(properties) {
                return new Item(properties);
            };

            /**
             * Encodes the specified Item message. Does not implicitly {@link cmsg.Rank.Item.verify|verify} messages.
             * @function encode
             * @memberof cmsg.Rank.Item
             * @static
             * @param {cmsg.Rank.IItem} message Item message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Item.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.entityID != null && message.hasOwnProperty("entityID"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.entityID);
                if (message.score != null && message.hasOwnProperty("score"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.score);
                if (message.rank != null && message.hasOwnProperty("rank"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.rank);
                if (message.killCount != null && message.hasOwnProperty("killCount"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.killCount);
                if (message.headImgUrl != null && message.hasOwnProperty("headImgUrl"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.headImgUrl);
                if (message.nickname != null && message.hasOwnProperty("nickname"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.nickname);
                return writer;
            };

            /**
             * Encodes the specified Item message, length delimited. Does not implicitly {@link cmsg.Rank.Item.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cmsg.Rank.Item
             * @static
             * @param {cmsg.Rank.IItem} message Item message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Item.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Item message from the specified reader or buffer.
             * @function decode
             * @memberof cmsg.Rank.Item
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cmsg.Rank.Item} Item
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Item.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cmsg.Rank.Item();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.entityID = reader.int32();
                        break;
                    case 2:
                        message.score = reader.int32();
                        break;
                    case 3:
                        message.rank = reader.int32();
                        break;
                    case 4:
                        message.killCount = reader.int32();
                        break;
                    case 5:
                        message.headImgUrl = reader.string();
                        break;
                    case 6:
                        message.nickname = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Item message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cmsg.Rank.Item
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cmsg.Rank.Item} Item
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Item.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Item message.
             * @function verify
             * @memberof cmsg.Rank.Item
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Item.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.entityID != null && message.hasOwnProperty("entityID"))
                    if (!$util.isInteger(message.entityID))
                        return "entityID: integer expected";
                if (message.score != null && message.hasOwnProperty("score"))
                    if (!$util.isInteger(message.score))
                        return "score: integer expected";
                if (message.rank != null && message.hasOwnProperty("rank"))
                    if (!$util.isInteger(message.rank))
                        return "rank: integer expected";
                if (message.killCount != null && message.hasOwnProperty("killCount"))
                    if (!$util.isInteger(message.killCount))
                        return "killCount: integer expected";
                if (message.headImgUrl != null && message.hasOwnProperty("headImgUrl"))
                    if (!$util.isString(message.headImgUrl))
                        return "headImgUrl: string expected";
                if (message.nickname != null && message.hasOwnProperty("nickname"))
                    if (!$util.isString(message.nickname))
                        return "nickname: string expected";
                return null;
            };

            /**
             * Creates an Item message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cmsg.Rank.Item
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cmsg.Rank.Item} Item
             */
            Item.fromObject = function fromObject(object) {
                if (object instanceof $root.cmsg.Rank.Item)
                    return object;
                var message = new $root.cmsg.Rank.Item();
                if (object.entityID != null)
                    message.entityID = object.entityID | 0;
                if (object.score != null)
                    message.score = object.score | 0;
                if (object.rank != null)
                    message.rank = object.rank | 0;
                if (object.killCount != null)
                    message.killCount = object.killCount | 0;
                if (object.headImgUrl != null)
                    message.headImgUrl = String(object.headImgUrl);
                if (object.nickname != null)
                    message.nickname = String(object.nickname);
                return message;
            };

            /**
             * Creates a plain object from an Item message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cmsg.Rank.Item
             * @static
             * @param {cmsg.Rank.Item} message Item
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Item.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.entityID = 0;
                    object.score = 0;
                    object.rank = 0;
                    object.killCount = 0;
                    object.headImgUrl = "";
                    object.nickname = "";
                }
                if (message.entityID != null && message.hasOwnProperty("entityID"))
                    object.entityID = message.entityID;
                if (message.score != null && message.hasOwnProperty("score"))
                    object.score = message.score;
                if (message.rank != null && message.hasOwnProperty("rank"))
                    object.rank = message.rank;
                if (message.killCount != null && message.hasOwnProperty("killCount"))
                    object.killCount = message.killCount;
                if (message.headImgUrl != null && message.hasOwnProperty("headImgUrl"))
                    object.headImgUrl = message.headImgUrl;
                if (message.nickname != null && message.hasOwnProperty("nickname"))
                    object.nickname = message.nickname;
                return object;
            };

            /**
             * Converts this Item to JSON.
             * @function toJSON
             * @memberof cmsg.Rank.Item
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Item.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Item;
        })();

        return Rank;
    })();

    cmsg.SNoticeGameOver = (function() {

        /**
         * Properties of a SNoticeGameOver.
         * @memberof cmsg
         * @interface ISNoticeGameOver
         * @property {number|null} [overReason] SNoticeGameOver overReason
         * @property {cmsg.SNoticeGameOver.IKiller|null} [killer] SNoticeGameOver killer
         * @property {number|null} [gameLeftSec] SNoticeGameOver gameLeftSec
         * @property {cmsg.IRank|null} [rank] SNoticeGameOver rank
         */

        /**
         * Constructs a new SNoticeGameOver.
         * @memberof cmsg
         * @classdesc Represents a SNoticeGameOver.
         * @implements ISNoticeGameOver
         * @constructor
         * @param {cmsg.ISNoticeGameOver=} [properties] Properties to set
         */
        function SNoticeGameOver(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SNoticeGameOver overReason.
         * @member {number} overReason
         * @memberof cmsg.SNoticeGameOver
         * @instance
         */
        SNoticeGameOver.prototype.overReason = 0;

        /**
         * SNoticeGameOver killer.
         * @member {cmsg.SNoticeGameOver.IKiller|null|undefined} killer
         * @memberof cmsg.SNoticeGameOver
         * @instance
         */
        SNoticeGameOver.prototype.killer = null;

        /**
         * SNoticeGameOver gameLeftSec.
         * @member {number} gameLeftSec
         * @memberof cmsg.SNoticeGameOver
         * @instance
         */
        SNoticeGameOver.prototype.gameLeftSec = 0;

        /**
         * SNoticeGameOver rank.
         * @member {cmsg.IRank|null|undefined} rank
         * @memberof cmsg.SNoticeGameOver
         * @instance
         */
        SNoticeGameOver.prototype.rank = null;

        /**
         * Creates a new SNoticeGameOver instance using the specified properties.
         * @function create
         * @memberof cmsg.SNoticeGameOver
         * @static
         * @param {cmsg.ISNoticeGameOver=} [properties] Properties to set
         * @returns {cmsg.SNoticeGameOver} SNoticeGameOver instance
         */
        SNoticeGameOver.create = function create(properties) {
            return new SNoticeGameOver(properties);
        };

        /**
         * Encodes the specified SNoticeGameOver message. Does not implicitly {@link cmsg.SNoticeGameOver.verify|verify} messages.
         * @function encode
         * @memberof cmsg.SNoticeGameOver
         * @static
         * @param {cmsg.ISNoticeGameOver} message SNoticeGameOver message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SNoticeGameOver.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.overReason != null && message.hasOwnProperty("overReason"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.overReason);
            if (message.killer != null && message.hasOwnProperty("killer"))
                $root.cmsg.SNoticeGameOver.Killer.encode(message.killer, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.gameLeftSec != null && message.hasOwnProperty("gameLeftSec"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.gameLeftSec);
            if (message.rank != null && message.hasOwnProperty("rank"))
                $root.cmsg.Rank.encode(message.rank, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SNoticeGameOver message, length delimited. Does not implicitly {@link cmsg.SNoticeGameOver.verify|verify} messages.
         * @function encodeDelimited
         * @memberof cmsg.SNoticeGameOver
         * @static
         * @param {cmsg.ISNoticeGameOver} message SNoticeGameOver message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SNoticeGameOver.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SNoticeGameOver message from the specified reader or buffer.
         * @function decode
         * @memberof cmsg.SNoticeGameOver
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {cmsg.SNoticeGameOver} SNoticeGameOver
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SNoticeGameOver.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cmsg.SNoticeGameOver();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.overReason = reader.int32();
                    break;
                case 2:
                    message.killer = $root.cmsg.SNoticeGameOver.Killer.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.gameLeftSec = reader.int32();
                    break;
                case 4:
                    message.rank = $root.cmsg.Rank.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SNoticeGameOver message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof cmsg.SNoticeGameOver
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {cmsg.SNoticeGameOver} SNoticeGameOver
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SNoticeGameOver.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SNoticeGameOver message.
         * @function verify
         * @memberof cmsg.SNoticeGameOver
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SNoticeGameOver.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.overReason != null && message.hasOwnProperty("overReason"))
                if (!$util.isInteger(message.overReason))
                    return "overReason: integer expected";
            if (message.killer != null && message.hasOwnProperty("killer")) {
                var error = $root.cmsg.SNoticeGameOver.Killer.verify(message.killer);
                if (error)
                    return "killer." + error;
            }
            if (message.gameLeftSec != null && message.hasOwnProperty("gameLeftSec"))
                if (!$util.isInteger(message.gameLeftSec))
                    return "gameLeftSec: integer expected";
            if (message.rank != null && message.hasOwnProperty("rank")) {
                var error = $root.cmsg.Rank.verify(message.rank);
                if (error)
                    return "rank." + error;
            }
            return null;
        };

        /**
         * Creates a SNoticeGameOver message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof cmsg.SNoticeGameOver
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {cmsg.SNoticeGameOver} SNoticeGameOver
         */
        SNoticeGameOver.fromObject = function fromObject(object) {
            if (object instanceof $root.cmsg.SNoticeGameOver)
                return object;
            var message = new $root.cmsg.SNoticeGameOver();
            if (object.overReason != null)
                message.overReason = object.overReason | 0;
            if (object.killer != null) {
                if (typeof object.killer !== "object")
                    throw TypeError(".cmsg.SNoticeGameOver.killer: object expected");
                message.killer = $root.cmsg.SNoticeGameOver.Killer.fromObject(object.killer);
            }
            if (object.gameLeftSec != null)
                message.gameLeftSec = object.gameLeftSec | 0;
            if (object.rank != null) {
                if (typeof object.rank !== "object")
                    throw TypeError(".cmsg.SNoticeGameOver.rank: object expected");
                message.rank = $root.cmsg.Rank.fromObject(object.rank);
            }
            return message;
        };

        /**
         * Creates a plain object from a SNoticeGameOver message. Also converts values to other types if specified.
         * @function toObject
         * @memberof cmsg.SNoticeGameOver
         * @static
         * @param {cmsg.SNoticeGameOver} message SNoticeGameOver
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SNoticeGameOver.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.overReason = 0;
                object.killer = null;
                object.gameLeftSec = 0;
                object.rank = null;
            }
            if (message.overReason != null && message.hasOwnProperty("overReason"))
                object.overReason = message.overReason;
            if (message.killer != null && message.hasOwnProperty("killer"))
                object.killer = $root.cmsg.SNoticeGameOver.Killer.toObject(message.killer, options);
            if (message.gameLeftSec != null && message.hasOwnProperty("gameLeftSec"))
                object.gameLeftSec = message.gameLeftSec;
            if (message.rank != null && message.hasOwnProperty("rank"))
                object.rank = $root.cmsg.Rank.toObject(message.rank, options);
            return object;
        };

        /**
         * Converts this SNoticeGameOver to JSON.
         * @function toJSON
         * @memberof cmsg.SNoticeGameOver
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SNoticeGameOver.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        SNoticeGameOver.Killer = (function() {

            /**
             * Properties of a Killer.
             * @memberof cmsg.SNoticeGameOver
             * @interface IKiller
             * @property {number|null} [accountType] Killer accountType
             * @property {string|null} [nickname] Killer nickname
             * @property {string|null} [headImgUrl] Killer headImgUrl
             * @property {number|null} [hp] Killer hp
             */

            /**
             * Constructs a new Killer.
             * @memberof cmsg.SNoticeGameOver
             * @classdesc Represents a Killer.
             * @implements IKiller
             * @constructor
             * @param {cmsg.SNoticeGameOver.IKiller=} [properties] Properties to set
             */
            function Killer(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Killer accountType.
             * @member {number} accountType
             * @memberof cmsg.SNoticeGameOver.Killer
             * @instance
             */
            Killer.prototype.accountType = 0;

            /**
             * Killer nickname.
             * @member {string} nickname
             * @memberof cmsg.SNoticeGameOver.Killer
             * @instance
             */
            Killer.prototype.nickname = "";

            /**
             * Killer headImgUrl.
             * @member {string} headImgUrl
             * @memberof cmsg.SNoticeGameOver.Killer
             * @instance
             */
            Killer.prototype.headImgUrl = "";

            /**
             * Killer hp.
             * @member {number} hp
             * @memberof cmsg.SNoticeGameOver.Killer
             * @instance
             */
            Killer.prototype.hp = 0;

            /**
             * Creates a new Killer instance using the specified properties.
             * @function create
             * @memberof cmsg.SNoticeGameOver.Killer
             * @static
             * @param {cmsg.SNoticeGameOver.IKiller=} [properties] Properties to set
             * @returns {cmsg.SNoticeGameOver.Killer} Killer instance
             */
            Killer.create = function create(properties) {
                return new Killer(properties);
            };

            /**
             * Encodes the specified Killer message. Does not implicitly {@link cmsg.SNoticeGameOver.Killer.verify|verify} messages.
             * @function encode
             * @memberof cmsg.SNoticeGameOver.Killer
             * @static
             * @param {cmsg.SNoticeGameOver.IKiller} message Killer message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Killer.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.accountType != null && message.hasOwnProperty("accountType"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.accountType);
                if (message.nickname != null && message.hasOwnProperty("nickname"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.nickname);
                if (message.headImgUrl != null && message.hasOwnProperty("headImgUrl"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.headImgUrl);
                if (message.hp != null && message.hasOwnProperty("hp"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.hp);
                return writer;
            };

            /**
             * Encodes the specified Killer message, length delimited. Does not implicitly {@link cmsg.SNoticeGameOver.Killer.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cmsg.SNoticeGameOver.Killer
             * @static
             * @param {cmsg.SNoticeGameOver.IKiller} message Killer message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Killer.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Killer message from the specified reader or buffer.
             * @function decode
             * @memberof cmsg.SNoticeGameOver.Killer
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cmsg.SNoticeGameOver.Killer} Killer
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Killer.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cmsg.SNoticeGameOver.Killer();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.accountType = reader.int32();
                        break;
                    case 2:
                        message.nickname = reader.string();
                        break;
                    case 3:
                        message.headImgUrl = reader.string();
                        break;
                    case 4:
                        message.hp = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Killer message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cmsg.SNoticeGameOver.Killer
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cmsg.SNoticeGameOver.Killer} Killer
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Killer.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Killer message.
             * @function verify
             * @memberof cmsg.SNoticeGameOver.Killer
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Killer.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.accountType != null && message.hasOwnProperty("accountType"))
                    if (!$util.isInteger(message.accountType))
                        return "accountType: integer expected";
                if (message.nickname != null && message.hasOwnProperty("nickname"))
                    if (!$util.isString(message.nickname))
                        return "nickname: string expected";
                if (message.headImgUrl != null && message.hasOwnProperty("headImgUrl"))
                    if (!$util.isString(message.headImgUrl))
                        return "headImgUrl: string expected";
                if (message.hp != null && message.hasOwnProperty("hp"))
                    if (!$util.isInteger(message.hp))
                        return "hp: integer expected";
                return null;
            };

            /**
             * Creates a Killer message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cmsg.SNoticeGameOver.Killer
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cmsg.SNoticeGameOver.Killer} Killer
             */
            Killer.fromObject = function fromObject(object) {
                if (object instanceof $root.cmsg.SNoticeGameOver.Killer)
                    return object;
                var message = new $root.cmsg.SNoticeGameOver.Killer();
                if (object.accountType != null)
                    message.accountType = object.accountType | 0;
                if (object.nickname != null)
                    message.nickname = String(object.nickname);
                if (object.headImgUrl != null)
                    message.headImgUrl = String(object.headImgUrl);
                if (object.hp != null)
                    message.hp = object.hp | 0;
                return message;
            };

            /**
             * Creates a plain object from a Killer message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cmsg.SNoticeGameOver.Killer
             * @static
             * @param {cmsg.SNoticeGameOver.Killer} message Killer
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Killer.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.accountType = 0;
                    object.nickname = "";
                    object.headImgUrl = "";
                    object.hp = 0;
                }
                if (message.accountType != null && message.hasOwnProperty("accountType"))
                    object.accountType = message.accountType;
                if (message.nickname != null && message.hasOwnProperty("nickname"))
                    object.nickname = message.nickname;
                if (message.headImgUrl != null && message.hasOwnProperty("headImgUrl"))
                    object.headImgUrl = message.headImgUrl;
                if (message.hp != null && message.hasOwnProperty("hp"))
                    object.hp = message.hp;
                return object;
            };

            /**
             * Converts this Killer to JSON.
             * @function toJSON
             * @memberof cmsg.SNoticeGameOver.Killer
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Killer.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Killer;
        })();

        return SNoticeGameOver;
    })();

    cmsg.ReqMove = (function() {

        /**
         * Properties of a ReqMove.
         * @memberof cmsg
         * @interface IReqMove
         * @property {number|null} [pressTime] ReqMove pressTime
         * @property {number|null} [targetRotation] ReqMove targetRotation
         * @property {number|null} [inputSeqID] ReqMove inputSeqID
         */

        /**
         * Constructs a new ReqMove.
         * @memberof cmsg
         * @classdesc Represents a ReqMove.
         * @implements IReqMove
         * @constructor
         * @param {cmsg.IReqMove=} [properties] Properties to set
         */
        function ReqMove(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqMove pressTime.
         * @member {number} pressTime
         * @memberof cmsg.ReqMove
         * @instance
         */
        ReqMove.prototype.pressTime = 0;

        /**
         * ReqMove targetRotation.
         * @member {number} targetRotation
         * @memberof cmsg.ReqMove
         * @instance
         */
        ReqMove.prototype.targetRotation = 0;

        /**
         * ReqMove inputSeqID.
         * @member {number} inputSeqID
         * @memberof cmsg.ReqMove
         * @instance
         */
        ReqMove.prototype.inputSeqID = 0;

        /**
         * Creates a new ReqMove instance using the specified properties.
         * @function create
         * @memberof cmsg.ReqMove
         * @static
         * @param {cmsg.IReqMove=} [properties] Properties to set
         * @returns {cmsg.ReqMove} ReqMove instance
         */
        ReqMove.create = function create(properties) {
            return new ReqMove(properties);
        };

        /**
         * Encodes the specified ReqMove message. Does not implicitly {@link cmsg.ReqMove.verify|verify} messages.
         * @function encode
         * @memberof cmsg.ReqMove
         * @static
         * @param {cmsg.IReqMove} message ReqMove message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqMove.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.pressTime != null && message.hasOwnProperty("pressTime"))
                writer.uint32(/* id 1, wireType 5 =*/13).float(message.pressTime);
            if (message.targetRotation != null && message.hasOwnProperty("targetRotation"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.targetRotation);
            if (message.inputSeqID != null && message.hasOwnProperty("inputSeqID"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.inputSeqID);
            return writer;
        };

        /**
         * Encodes the specified ReqMove message, length delimited. Does not implicitly {@link cmsg.ReqMove.verify|verify} messages.
         * @function encodeDelimited
         * @memberof cmsg.ReqMove
         * @static
         * @param {cmsg.IReqMove} message ReqMove message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqMove.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqMove message from the specified reader or buffer.
         * @function decode
         * @memberof cmsg.ReqMove
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {cmsg.ReqMove} ReqMove
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqMove.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cmsg.ReqMove();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.pressTime = reader.float();
                    break;
                case 2:
                    message.targetRotation = reader.float();
                    break;
                case 3:
                    message.inputSeqID = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReqMove message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof cmsg.ReqMove
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {cmsg.ReqMove} ReqMove
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqMove.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqMove message.
         * @function verify
         * @memberof cmsg.ReqMove
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqMove.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.pressTime != null && message.hasOwnProperty("pressTime"))
                if (typeof message.pressTime !== "number")
                    return "pressTime: number expected";
            if (message.targetRotation != null && message.hasOwnProperty("targetRotation"))
                if (typeof message.targetRotation !== "number")
                    return "targetRotation: number expected";
            if (message.inputSeqID != null && message.hasOwnProperty("inputSeqID"))
                if (!$util.isInteger(message.inputSeqID))
                    return "inputSeqID: integer expected";
            return null;
        };

        /**
         * Creates a ReqMove message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof cmsg.ReqMove
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {cmsg.ReqMove} ReqMove
         */
        ReqMove.fromObject = function fromObject(object) {
            if (object instanceof $root.cmsg.ReqMove)
                return object;
            var message = new $root.cmsg.ReqMove();
            if (object.pressTime != null)
                message.pressTime = Number(object.pressTime);
            if (object.targetRotation != null)
                message.targetRotation = Number(object.targetRotation);
            if (object.inputSeqID != null)
                message.inputSeqID = object.inputSeqID | 0;
            return message;
        };

        /**
         * Creates a plain object from a ReqMove message. Also converts values to other types if specified.
         * @function toObject
         * @memberof cmsg.ReqMove
         * @static
         * @param {cmsg.ReqMove} message ReqMove
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqMove.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.pressTime = 0;
                object.targetRotation = 0;
                object.inputSeqID = 0;
            }
            if (message.pressTime != null && message.hasOwnProperty("pressTime"))
                object.pressTime = options.json && !isFinite(message.pressTime) ? String(message.pressTime) : message.pressTime;
            if (message.targetRotation != null && message.hasOwnProperty("targetRotation"))
                object.targetRotation = options.json && !isFinite(message.targetRotation) ? String(message.targetRotation) : message.targetRotation;
            if (message.inputSeqID != null && message.hasOwnProperty("inputSeqID"))
                object.inputSeqID = message.inputSeqID;
            return object;
        };

        /**
         * Converts this ReqMove to JSON.
         * @function toJSON
         * @memberof cmsg.ReqMove
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqMove.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqMove;
    })();

    cmsg.ReqShoot = (function() {

        /**
         * Properties of a ReqShoot.
         * @memberof cmsg
         * @interface IReqShoot
         */

        /**
         * Constructs a new ReqShoot.
         * @memberof cmsg
         * @classdesc Represents a ReqShoot.
         * @implements IReqShoot
         * @constructor
         * @param {cmsg.IReqShoot=} [properties] Properties to set
         */
        function ReqShoot(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ReqShoot instance using the specified properties.
         * @function create
         * @memberof cmsg.ReqShoot
         * @static
         * @param {cmsg.IReqShoot=} [properties] Properties to set
         * @returns {cmsg.ReqShoot} ReqShoot instance
         */
        ReqShoot.create = function create(properties) {
            return new ReqShoot(properties);
        };

        /**
         * Encodes the specified ReqShoot message. Does not implicitly {@link cmsg.ReqShoot.verify|verify} messages.
         * @function encode
         * @memberof cmsg.ReqShoot
         * @static
         * @param {cmsg.IReqShoot} message ReqShoot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqShoot.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified ReqShoot message, length delimited. Does not implicitly {@link cmsg.ReqShoot.verify|verify} messages.
         * @function encodeDelimited
         * @memberof cmsg.ReqShoot
         * @static
         * @param {cmsg.IReqShoot} message ReqShoot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqShoot.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqShoot message from the specified reader or buffer.
         * @function decode
         * @memberof cmsg.ReqShoot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {cmsg.ReqShoot} ReqShoot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqShoot.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cmsg.ReqShoot();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReqShoot message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof cmsg.ReqShoot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {cmsg.ReqShoot} ReqShoot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqShoot.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqShoot message.
         * @function verify
         * @memberof cmsg.ReqShoot
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqShoot.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a ReqShoot message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof cmsg.ReqShoot
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {cmsg.ReqShoot} ReqShoot
         */
        ReqShoot.fromObject = function fromObject(object) {
            if (object instanceof $root.cmsg.ReqShoot)
                return object;
            return new $root.cmsg.ReqShoot();
        };

        /**
         * Creates a plain object from a ReqShoot message. Also converts values to other types if specified.
         * @function toObject
         * @memberof cmsg.ReqShoot
         * @static
         * @param {cmsg.ReqShoot} message ReqShoot
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqShoot.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this ReqShoot to JSON.
         * @function toJSON
         * @memberof cmsg.ReqShoot
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqShoot.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqShoot;
    })();

    cmsg.ReqJump = (function() {

        /**
         * Properties of a ReqJump.
         * @memberof cmsg
         * @interface IReqJump
         */

        /**
         * Constructs a new ReqJump.
         * @memberof cmsg
         * @classdesc Represents a ReqJump.
         * @implements IReqJump
         * @constructor
         * @param {cmsg.IReqJump=} [properties] Properties to set
         */
        function ReqJump(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ReqJump instance using the specified properties.
         * @function create
         * @memberof cmsg.ReqJump
         * @static
         * @param {cmsg.IReqJump=} [properties] Properties to set
         * @returns {cmsg.ReqJump} ReqJump instance
         */
        ReqJump.create = function create(properties) {
            return new ReqJump(properties);
        };

        /**
         * Encodes the specified ReqJump message. Does not implicitly {@link cmsg.ReqJump.verify|verify} messages.
         * @function encode
         * @memberof cmsg.ReqJump
         * @static
         * @param {cmsg.IReqJump} message ReqJump message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqJump.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified ReqJump message, length delimited. Does not implicitly {@link cmsg.ReqJump.verify|verify} messages.
         * @function encodeDelimited
         * @memberof cmsg.ReqJump
         * @static
         * @param {cmsg.IReqJump} message ReqJump message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqJump.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqJump message from the specified reader or buffer.
         * @function decode
         * @memberof cmsg.ReqJump
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {cmsg.ReqJump} ReqJump
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqJump.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cmsg.ReqJump();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReqJump message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof cmsg.ReqJump
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {cmsg.ReqJump} ReqJump
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqJump.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqJump message.
         * @function verify
         * @memberof cmsg.ReqJump
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqJump.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a ReqJump message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof cmsg.ReqJump
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {cmsg.ReqJump} ReqJump
         */
        ReqJump.fromObject = function fromObject(object) {
            if (object instanceof $root.cmsg.ReqJump)
                return object;
            return new $root.cmsg.ReqJump();
        };

        /**
         * Creates a plain object from a ReqJump message. Also converts values to other types if specified.
         * @function toObject
         * @memberof cmsg.ReqJump
         * @static
         * @param {cmsg.ReqJump} message ReqJump
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqJump.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this ReqJump to JSON.
         * @function toJSON
         * @memberof cmsg.ReqJump
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqJump.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqJump;
    })();

    cmsg.ReqGameScene = (function() {

        /**
         * Properties of a ReqGameScene.
         * @memberof cmsg
         * @interface IReqGameScene
         */

        /**
         * Constructs a new ReqGameScene.
         * @memberof cmsg
         * @classdesc Represents a ReqGameScene.
         * @implements IReqGameScene
         * @constructor
         * @param {cmsg.IReqGameScene=} [properties] Properties to set
         */
        function ReqGameScene(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ReqGameScene instance using the specified properties.
         * @function create
         * @memberof cmsg.ReqGameScene
         * @static
         * @param {cmsg.IReqGameScene=} [properties] Properties to set
         * @returns {cmsg.ReqGameScene} ReqGameScene instance
         */
        ReqGameScene.create = function create(properties) {
            return new ReqGameScene(properties);
        };

        /**
         * Encodes the specified ReqGameScene message. Does not implicitly {@link cmsg.ReqGameScene.verify|verify} messages.
         * @function encode
         * @memberof cmsg.ReqGameScene
         * @static
         * @param {cmsg.IReqGameScene} message ReqGameScene message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqGameScene.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified ReqGameScene message, length delimited. Does not implicitly {@link cmsg.ReqGameScene.verify|verify} messages.
         * @function encodeDelimited
         * @memberof cmsg.ReqGameScene
         * @static
         * @param {cmsg.IReqGameScene} message ReqGameScene message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqGameScene.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqGameScene message from the specified reader or buffer.
         * @function decode
         * @memberof cmsg.ReqGameScene
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {cmsg.ReqGameScene} ReqGameScene
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqGameScene.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cmsg.ReqGameScene();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReqGameScene message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof cmsg.ReqGameScene
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {cmsg.ReqGameScene} ReqGameScene
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqGameScene.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqGameScene message.
         * @function verify
         * @memberof cmsg.ReqGameScene
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqGameScene.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a ReqGameScene message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof cmsg.ReqGameScene
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {cmsg.ReqGameScene} ReqGameScene
         */
        ReqGameScene.fromObject = function fromObject(object) {
            if (object instanceof $root.cmsg.ReqGameScene)
                return object;
            return new $root.cmsg.ReqGameScene();
        };

        /**
         * Creates a plain object from a ReqGameScene message. Also converts values to other types if specified.
         * @function toObject
         * @memberof cmsg.ReqGameScene
         * @static
         * @param {cmsg.ReqGameScene} message ReqGameScene
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqGameScene.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this ReqGameScene to JSON.
         * @function toJSON
         * @memberof cmsg.ReqGameScene
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqGameScene.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqGameScene;
    })();

    cmsg.RespGameScene = (function() {

        /**
         * Properties of a RespGameScene.
         * @memberof cmsg
         * @interface IRespGameScene
         * @property {Array.<cmsg.IEntity>|null} [entities] RespGameScene entities
         * @property {number|null} [gameLeftSec] RespGameScene gameLeftSec
         * @property {cmsg.RespGameScene.Error|null} [err] RespGameScene err
         */

        /**
         * Constructs a new RespGameScene.
         * @memberof cmsg
         * @classdesc Represents a RespGameScene.
         * @implements IRespGameScene
         * @constructor
         * @param {cmsg.IRespGameScene=} [properties] Properties to set
         */
        function RespGameScene(properties) {
            this.entities = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RespGameScene entities.
         * @member {Array.<cmsg.IEntity>} entities
         * @memberof cmsg.RespGameScene
         * @instance
         */
        RespGameScene.prototype.entities = $util.emptyArray;

        /**
         * RespGameScene gameLeftSec.
         * @member {number} gameLeftSec
         * @memberof cmsg.RespGameScene
         * @instance
         */
        RespGameScene.prototype.gameLeftSec = 0;

        /**
         * RespGameScene err.
         * @member {cmsg.RespGameScene.Error} err
         * @memberof cmsg.RespGameScene
         * @instance
         */
        RespGameScene.prototype.err = 0;

        /**
         * Creates a new RespGameScene instance using the specified properties.
         * @function create
         * @memberof cmsg.RespGameScene
         * @static
         * @param {cmsg.IRespGameScene=} [properties] Properties to set
         * @returns {cmsg.RespGameScene} RespGameScene instance
         */
        RespGameScene.create = function create(properties) {
            return new RespGameScene(properties);
        };

        /**
         * Encodes the specified RespGameScene message. Does not implicitly {@link cmsg.RespGameScene.verify|verify} messages.
         * @function encode
         * @memberof cmsg.RespGameScene
         * @static
         * @param {cmsg.IRespGameScene} message RespGameScene message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespGameScene.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.entities != null && message.entities.length)
                for (var i = 0; i < message.entities.length; ++i)
                    $root.cmsg.Entity.encode(message.entities[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.gameLeftSec != null && message.hasOwnProperty("gameLeftSec"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.gameLeftSec);
            if (message.err != null && message.hasOwnProperty("err"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.err);
            return writer;
        };

        /**
         * Encodes the specified RespGameScene message, length delimited. Does not implicitly {@link cmsg.RespGameScene.verify|verify} messages.
         * @function encodeDelimited
         * @memberof cmsg.RespGameScene
         * @static
         * @param {cmsg.IRespGameScene} message RespGameScene message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespGameScene.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespGameScene message from the specified reader or buffer.
         * @function decode
         * @memberof cmsg.RespGameScene
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {cmsg.RespGameScene} RespGameScene
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespGameScene.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cmsg.RespGameScene();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.entities && message.entities.length))
                        message.entities = [];
                    message.entities.push($root.cmsg.Entity.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.gameLeftSec = reader.int32();
                    break;
                case 3:
                    message.err = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RespGameScene message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof cmsg.RespGameScene
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {cmsg.RespGameScene} RespGameScene
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespGameScene.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RespGameScene message.
         * @function verify
         * @memberof cmsg.RespGameScene
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RespGameScene.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.entities != null && message.hasOwnProperty("entities")) {
                if (!Array.isArray(message.entities))
                    return "entities: array expected";
                for (var i = 0; i < message.entities.length; ++i) {
                    var error = $root.cmsg.Entity.verify(message.entities[i]);
                    if (error)
                        return "entities." + error;
                }
            }
            if (message.gameLeftSec != null && message.hasOwnProperty("gameLeftSec"))
                if (!$util.isInteger(message.gameLeftSec))
                    return "gameLeftSec: integer expected";
            if (message.err != null && message.hasOwnProperty("err"))
                switch (message.err) {
                default:
                    return "err: enum value expected";
                case 0:
                case 1:
                    break;
                }
            return null;
        };

        /**
         * Creates a RespGameScene message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof cmsg.RespGameScene
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {cmsg.RespGameScene} RespGameScene
         */
        RespGameScene.fromObject = function fromObject(object) {
            if (object instanceof $root.cmsg.RespGameScene)
                return object;
            var message = new $root.cmsg.RespGameScene();
            if (object.entities) {
                if (!Array.isArray(object.entities))
                    throw TypeError(".cmsg.RespGameScene.entities: array expected");
                message.entities = [];
                for (var i = 0; i < object.entities.length; ++i) {
                    if (typeof object.entities[i] !== "object")
                        throw TypeError(".cmsg.RespGameScene.entities: object expected");
                    message.entities[i] = $root.cmsg.Entity.fromObject(object.entities[i]);
                }
            }
            if (object.gameLeftSec != null)
                message.gameLeftSec = object.gameLeftSec | 0;
            switch (object.err) {
            case "Invalid":
            case 0:
                message.err = 0;
                break;
            case "GameNotExist":
            case 1:
                message.err = 1;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a RespGameScene message. Also converts values to other types if specified.
         * @function toObject
         * @memberof cmsg.RespGameScene
         * @static
         * @param {cmsg.RespGameScene} message RespGameScene
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RespGameScene.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.entities = [];
            if (options.defaults) {
                object.gameLeftSec = 0;
                object.err = options.enums === String ? "Invalid" : 0;
            }
            if (message.entities && message.entities.length) {
                object.entities = [];
                for (var j = 0; j < message.entities.length; ++j)
                    object.entities[j] = $root.cmsg.Entity.toObject(message.entities[j], options);
            }
            if (message.gameLeftSec != null && message.hasOwnProperty("gameLeftSec"))
                object.gameLeftSec = message.gameLeftSec;
            if (message.err != null && message.hasOwnProperty("err"))
                object.err = options.enums === String ? $root.cmsg.RespGameScene.Error[message.err] : message.err;
            return object;
        };

        /**
         * Converts this RespGameScene to JSON.
         * @function toJSON
         * @memberof cmsg.RespGameScene
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RespGameScene.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Error enum.
         * @name cmsg.RespGameScene.Error
         * @enum {string}
         * @property {number} Invalid=0 Invalid value
         * @property {number} GameNotExist=1 GameNotExist value
         */
        RespGameScene.Error = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Invalid"] = 0;
            values[valuesById[1] = "GameNotExist"] = 1;
            return values;
        })();

        return RespGameScene;
    })();

    cmsg.SNoticeShoot = (function() {

        /**
         * Properties of a SNoticeShoot.
         * @memberof cmsg
         * @interface ISNoticeShoot
         * @property {number|null} [x] SNoticeShoot x
         * @property {number|null} [y] SNoticeShoot y
         * @property {number|null} [rotation] SNoticeShoot rotation
         * @property {number|null} [bulletID] SNoticeShoot bulletID
         * @property {number|null} [creatorEntityID] SNoticeShoot creatorEntityID
         */

        /**
         * Constructs a new SNoticeShoot.
         * @memberof cmsg
         * @classdesc Represents a SNoticeShoot.
         * @implements ISNoticeShoot
         * @constructor
         * @param {cmsg.ISNoticeShoot=} [properties] Properties to set
         */
        function SNoticeShoot(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SNoticeShoot x.
         * @member {number} x
         * @memberof cmsg.SNoticeShoot
         * @instance
         */
        SNoticeShoot.prototype.x = 0;

        /**
         * SNoticeShoot y.
         * @member {number} y
         * @memberof cmsg.SNoticeShoot
         * @instance
         */
        SNoticeShoot.prototype.y = 0;

        /**
         * SNoticeShoot rotation.
         * @member {number} rotation
         * @memberof cmsg.SNoticeShoot
         * @instance
         */
        SNoticeShoot.prototype.rotation = 0;

        /**
         * SNoticeShoot bulletID.
         * @member {number} bulletID
         * @memberof cmsg.SNoticeShoot
         * @instance
         */
        SNoticeShoot.prototype.bulletID = 0;

        /**
         * SNoticeShoot creatorEntityID.
         * @member {number} creatorEntityID
         * @memberof cmsg.SNoticeShoot
         * @instance
         */
        SNoticeShoot.prototype.creatorEntityID = 0;

        /**
         * Creates a new SNoticeShoot instance using the specified properties.
         * @function create
         * @memberof cmsg.SNoticeShoot
         * @static
         * @param {cmsg.ISNoticeShoot=} [properties] Properties to set
         * @returns {cmsg.SNoticeShoot} SNoticeShoot instance
         */
        SNoticeShoot.create = function create(properties) {
            return new SNoticeShoot(properties);
        };

        /**
         * Encodes the specified SNoticeShoot message. Does not implicitly {@link cmsg.SNoticeShoot.verify|verify} messages.
         * @function encode
         * @memberof cmsg.SNoticeShoot
         * @static
         * @param {cmsg.ISNoticeShoot} message SNoticeShoot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SNoticeShoot.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.x != null && message.hasOwnProperty("x"))
                writer.uint32(/* id 1, wireType 5 =*/13).float(message.x);
            if (message.y != null && message.hasOwnProperty("y"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.y);
            if (message.rotation != null && message.hasOwnProperty("rotation"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.rotation);
            if (message.bulletID != null && message.hasOwnProperty("bulletID"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.bulletID);
            if (message.creatorEntityID != null && message.hasOwnProperty("creatorEntityID"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.creatorEntityID);
            return writer;
        };

        /**
         * Encodes the specified SNoticeShoot message, length delimited. Does not implicitly {@link cmsg.SNoticeShoot.verify|verify} messages.
         * @function encodeDelimited
         * @memberof cmsg.SNoticeShoot
         * @static
         * @param {cmsg.ISNoticeShoot} message SNoticeShoot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SNoticeShoot.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SNoticeShoot message from the specified reader or buffer.
         * @function decode
         * @memberof cmsg.SNoticeShoot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {cmsg.SNoticeShoot} SNoticeShoot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SNoticeShoot.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cmsg.SNoticeShoot();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.x = reader.float();
                    break;
                case 2:
                    message.y = reader.float();
                    break;
                case 3:
                    message.rotation = reader.float();
                    break;
                case 4:
                    message.bulletID = reader.int32();
                    break;
                case 5:
                    message.creatorEntityID = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SNoticeShoot message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof cmsg.SNoticeShoot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {cmsg.SNoticeShoot} SNoticeShoot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SNoticeShoot.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SNoticeShoot message.
         * @function verify
         * @memberof cmsg.SNoticeShoot
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SNoticeShoot.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (typeof message.x !== "number")
                    return "x: number expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (typeof message.y !== "number")
                    return "y: number expected";
            if (message.rotation != null && message.hasOwnProperty("rotation"))
                if (typeof message.rotation !== "number")
                    return "rotation: number expected";
            if (message.bulletID != null && message.hasOwnProperty("bulletID"))
                if (!$util.isInteger(message.bulletID))
                    return "bulletID: integer expected";
            if (message.creatorEntityID != null && message.hasOwnProperty("creatorEntityID"))
                if (!$util.isInteger(message.creatorEntityID))
                    return "creatorEntityID: integer expected";
            return null;
        };

        /**
         * Creates a SNoticeShoot message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof cmsg.SNoticeShoot
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {cmsg.SNoticeShoot} SNoticeShoot
         */
        SNoticeShoot.fromObject = function fromObject(object) {
            if (object instanceof $root.cmsg.SNoticeShoot)
                return object;
            var message = new $root.cmsg.SNoticeShoot();
            if (object.x != null)
                message.x = Number(object.x);
            if (object.y != null)
                message.y = Number(object.y);
            if (object.rotation != null)
                message.rotation = Number(object.rotation);
            if (object.bulletID != null)
                message.bulletID = object.bulletID | 0;
            if (object.creatorEntityID != null)
                message.creatorEntityID = object.creatorEntityID | 0;
            return message;
        };

        /**
         * Creates a plain object from a SNoticeShoot message. Also converts values to other types if specified.
         * @function toObject
         * @memberof cmsg.SNoticeShoot
         * @static
         * @param {cmsg.SNoticeShoot} message SNoticeShoot
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SNoticeShoot.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.x = 0;
                object.y = 0;
                object.rotation = 0;
                object.bulletID = 0;
                object.creatorEntityID = 0;
            }
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
            if (message.rotation != null && message.hasOwnProperty("rotation"))
                object.rotation = options.json && !isFinite(message.rotation) ? String(message.rotation) : message.rotation;
            if (message.bulletID != null && message.hasOwnProperty("bulletID"))
                object.bulletID = message.bulletID;
            if (message.creatorEntityID != null && message.hasOwnProperty("creatorEntityID"))
                object.creatorEntityID = message.creatorEntityID;
            return object;
        };

        /**
         * Converts this SNoticeShoot to JSON.
         * @function toJSON
         * @memberof cmsg.SNoticeShoot
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SNoticeShoot.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SNoticeShoot;
    })();

    cmsg.SNoticeWorldChange = (function() {

        /**
         * Properties of a SNoticeWorldChange.
         * @memberof cmsg
         * @interface ISNoticeWorldChange
         * @property {Array.<number>|null} [deleteBullets] SNoticeWorldChange deleteBullets
         * @property {Array.<number>|null} [deleteEntities] SNoticeWorldChange deleteEntities
         * @property {Array.<cmsg.SNoticeWorldChange.IEntity>|null} [changedEntities] SNoticeWorldChange changedEntities
         */

        /**
         * Constructs a new SNoticeWorldChange.
         * @memberof cmsg
         * @classdesc Represents a SNoticeWorldChange.
         * @implements ISNoticeWorldChange
         * @constructor
         * @param {cmsg.ISNoticeWorldChange=} [properties] Properties to set
         */
        function SNoticeWorldChange(properties) {
            this.deleteBullets = [];
            this.deleteEntities = [];
            this.changedEntities = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SNoticeWorldChange deleteBullets.
         * @member {Array.<number>} deleteBullets
         * @memberof cmsg.SNoticeWorldChange
         * @instance
         */
        SNoticeWorldChange.prototype.deleteBullets = $util.emptyArray;

        /**
         * SNoticeWorldChange deleteEntities.
         * @member {Array.<number>} deleteEntities
         * @memberof cmsg.SNoticeWorldChange
         * @instance
         */
        SNoticeWorldChange.prototype.deleteEntities = $util.emptyArray;

        /**
         * SNoticeWorldChange changedEntities.
         * @member {Array.<cmsg.SNoticeWorldChange.IEntity>} changedEntities
         * @memberof cmsg.SNoticeWorldChange
         * @instance
         */
        SNoticeWorldChange.prototype.changedEntities = $util.emptyArray;

        /**
         * Creates a new SNoticeWorldChange instance using the specified properties.
         * @function create
         * @memberof cmsg.SNoticeWorldChange
         * @static
         * @param {cmsg.ISNoticeWorldChange=} [properties] Properties to set
         * @returns {cmsg.SNoticeWorldChange} SNoticeWorldChange instance
         */
        SNoticeWorldChange.create = function create(properties) {
            return new SNoticeWorldChange(properties);
        };

        /**
         * Encodes the specified SNoticeWorldChange message. Does not implicitly {@link cmsg.SNoticeWorldChange.verify|verify} messages.
         * @function encode
         * @memberof cmsg.SNoticeWorldChange
         * @static
         * @param {cmsg.ISNoticeWorldChange} message SNoticeWorldChange message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SNoticeWorldChange.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.deleteBullets != null && message.deleteBullets.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.deleteBullets.length; ++i)
                    writer.int32(message.deleteBullets[i]);
                writer.ldelim();
            }
            if (message.deleteEntities != null && message.deleteEntities.length) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                for (var i = 0; i < message.deleteEntities.length; ++i)
                    writer.int32(message.deleteEntities[i]);
                writer.ldelim();
            }
            if (message.changedEntities != null && message.changedEntities.length)
                for (var i = 0; i < message.changedEntities.length; ++i)
                    $root.cmsg.SNoticeWorldChange.Entity.encode(message.changedEntities[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SNoticeWorldChange message, length delimited. Does not implicitly {@link cmsg.SNoticeWorldChange.verify|verify} messages.
         * @function encodeDelimited
         * @memberof cmsg.SNoticeWorldChange
         * @static
         * @param {cmsg.ISNoticeWorldChange} message SNoticeWorldChange message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SNoticeWorldChange.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SNoticeWorldChange message from the specified reader or buffer.
         * @function decode
         * @memberof cmsg.SNoticeWorldChange
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {cmsg.SNoticeWorldChange} SNoticeWorldChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SNoticeWorldChange.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cmsg.SNoticeWorldChange();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.deleteBullets && message.deleteBullets.length))
                        message.deleteBullets = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.deleteBullets.push(reader.int32());
                    } else
                        message.deleteBullets.push(reader.int32());
                    break;
                case 2:
                    if (!(message.deleteEntities && message.deleteEntities.length))
                        message.deleteEntities = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.deleteEntities.push(reader.int32());
                    } else
                        message.deleteEntities.push(reader.int32());
                    break;
                case 3:
                    if (!(message.changedEntities && message.changedEntities.length))
                        message.changedEntities = [];
                    message.changedEntities.push($root.cmsg.SNoticeWorldChange.Entity.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SNoticeWorldChange message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof cmsg.SNoticeWorldChange
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {cmsg.SNoticeWorldChange} SNoticeWorldChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SNoticeWorldChange.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SNoticeWorldChange message.
         * @function verify
         * @memberof cmsg.SNoticeWorldChange
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SNoticeWorldChange.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.deleteBullets != null && message.hasOwnProperty("deleteBullets")) {
                if (!Array.isArray(message.deleteBullets))
                    return "deleteBullets: array expected";
                for (var i = 0; i < message.deleteBullets.length; ++i)
                    if (!$util.isInteger(message.deleteBullets[i]))
                        return "deleteBullets: integer[] expected";
            }
            if (message.deleteEntities != null && message.hasOwnProperty("deleteEntities")) {
                if (!Array.isArray(message.deleteEntities))
                    return "deleteEntities: array expected";
                for (var i = 0; i < message.deleteEntities.length; ++i)
                    if (!$util.isInteger(message.deleteEntities[i]))
                        return "deleteEntities: integer[] expected";
            }
            if (message.changedEntities != null && message.hasOwnProperty("changedEntities")) {
                if (!Array.isArray(message.changedEntities))
                    return "changedEntities: array expected";
                for (var i = 0; i < message.changedEntities.length; ++i) {
                    var error = $root.cmsg.SNoticeWorldChange.Entity.verify(message.changedEntities[i]);
                    if (error)
                        return "changedEntities." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SNoticeWorldChange message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof cmsg.SNoticeWorldChange
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {cmsg.SNoticeWorldChange} SNoticeWorldChange
         */
        SNoticeWorldChange.fromObject = function fromObject(object) {
            if (object instanceof $root.cmsg.SNoticeWorldChange)
                return object;
            var message = new $root.cmsg.SNoticeWorldChange();
            if (object.deleteBullets) {
                if (!Array.isArray(object.deleteBullets))
                    throw TypeError(".cmsg.SNoticeWorldChange.deleteBullets: array expected");
                message.deleteBullets = [];
                for (var i = 0; i < object.deleteBullets.length; ++i)
                    message.deleteBullets[i] = object.deleteBullets[i] | 0;
            }
            if (object.deleteEntities) {
                if (!Array.isArray(object.deleteEntities))
                    throw TypeError(".cmsg.SNoticeWorldChange.deleteEntities: array expected");
                message.deleteEntities = [];
                for (var i = 0; i < object.deleteEntities.length; ++i)
                    message.deleteEntities[i] = object.deleteEntities[i] | 0;
            }
            if (object.changedEntities) {
                if (!Array.isArray(object.changedEntities))
                    throw TypeError(".cmsg.SNoticeWorldChange.changedEntities: array expected");
                message.changedEntities = [];
                for (var i = 0; i < object.changedEntities.length; ++i) {
                    if (typeof object.changedEntities[i] !== "object")
                        throw TypeError(".cmsg.SNoticeWorldChange.changedEntities: object expected");
                    message.changedEntities[i] = $root.cmsg.SNoticeWorldChange.Entity.fromObject(object.changedEntities[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SNoticeWorldChange message. Also converts values to other types if specified.
         * @function toObject
         * @memberof cmsg.SNoticeWorldChange
         * @static
         * @param {cmsg.SNoticeWorldChange} message SNoticeWorldChange
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SNoticeWorldChange.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.deleteBullets = [];
                object.deleteEntities = [];
                object.changedEntities = [];
            }
            if (message.deleteBullets && message.deleteBullets.length) {
                object.deleteBullets = [];
                for (var j = 0; j < message.deleteBullets.length; ++j)
                    object.deleteBullets[j] = message.deleteBullets[j];
            }
            if (message.deleteEntities && message.deleteEntities.length) {
                object.deleteEntities = [];
                for (var j = 0; j < message.deleteEntities.length; ++j)
                    object.deleteEntities[j] = message.deleteEntities[j];
            }
            if (message.changedEntities && message.changedEntities.length) {
                object.changedEntities = [];
                for (var j = 0; j < message.changedEntities.length; ++j)
                    object.changedEntities[j] = $root.cmsg.SNoticeWorldChange.Entity.toObject(message.changedEntities[j], options);
            }
            return object;
        };

        /**
         * Converts this SNoticeWorldChange to JSON.
         * @function toJSON
         * @memberof cmsg.SNoticeWorldChange
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SNoticeWorldChange.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        SNoticeWorldChange.Entity = (function() {

            /**
             * Properties of an Entity.
             * @memberof cmsg.SNoticeWorldChange
             * @interface IEntity
             * @property {number|null} [id] Entity id
             * @property {number|null} [hp] Entity hp
             * @property {number|null} [score] Entity score
             * @property {number|null} [killCount] Entity killCount
             */

            /**
             * Constructs a new Entity.
             * @memberof cmsg.SNoticeWorldChange
             * @classdesc Represents an Entity.
             * @implements IEntity
             * @constructor
             * @param {cmsg.SNoticeWorldChange.IEntity=} [properties] Properties to set
             */
            function Entity(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Entity id.
             * @member {number} id
             * @memberof cmsg.SNoticeWorldChange.Entity
             * @instance
             */
            Entity.prototype.id = 0;

            /**
             * Entity hp.
             * @member {number} hp
             * @memberof cmsg.SNoticeWorldChange.Entity
             * @instance
             */
            Entity.prototype.hp = 0;

            /**
             * Entity score.
             * @member {number} score
             * @memberof cmsg.SNoticeWorldChange.Entity
             * @instance
             */
            Entity.prototype.score = 0;

            /**
             * Entity killCount.
             * @member {number} killCount
             * @memberof cmsg.SNoticeWorldChange.Entity
             * @instance
             */
            Entity.prototype.killCount = 0;

            /**
             * Creates a new Entity instance using the specified properties.
             * @function create
             * @memberof cmsg.SNoticeWorldChange.Entity
             * @static
             * @param {cmsg.SNoticeWorldChange.IEntity=} [properties] Properties to set
             * @returns {cmsg.SNoticeWorldChange.Entity} Entity instance
             */
            Entity.create = function create(properties) {
                return new Entity(properties);
            };

            /**
             * Encodes the specified Entity message. Does not implicitly {@link cmsg.SNoticeWorldChange.Entity.verify|verify} messages.
             * @function encode
             * @memberof cmsg.SNoticeWorldChange.Entity
             * @static
             * @param {cmsg.SNoticeWorldChange.IEntity} message Entity message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Entity.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
                if (message.hp != null && message.hasOwnProperty("hp"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.hp);
                if (message.score != null && message.hasOwnProperty("score"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.score);
                if (message.killCount != null && message.hasOwnProperty("killCount"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.killCount);
                return writer;
            };

            /**
             * Encodes the specified Entity message, length delimited. Does not implicitly {@link cmsg.SNoticeWorldChange.Entity.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cmsg.SNoticeWorldChange.Entity
             * @static
             * @param {cmsg.SNoticeWorldChange.IEntity} message Entity message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Entity.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Entity message from the specified reader or buffer.
             * @function decode
             * @memberof cmsg.SNoticeWorldChange.Entity
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cmsg.SNoticeWorldChange.Entity} Entity
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Entity.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cmsg.SNoticeWorldChange.Entity();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.int32();
                        break;
                    case 2:
                        message.hp = reader.int32();
                        break;
                    case 3:
                        message.score = reader.int32();
                        break;
                    case 4:
                        message.killCount = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Entity message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cmsg.SNoticeWorldChange.Entity
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cmsg.SNoticeWorldChange.Entity} Entity
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Entity.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Entity message.
             * @function verify
             * @memberof cmsg.SNoticeWorldChange.Entity
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Entity.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isInteger(message.id))
                        return "id: integer expected";
                if (message.hp != null && message.hasOwnProperty("hp"))
                    if (!$util.isInteger(message.hp))
                        return "hp: integer expected";
                if (message.score != null && message.hasOwnProperty("score"))
                    if (!$util.isInteger(message.score))
                        return "score: integer expected";
                if (message.killCount != null && message.hasOwnProperty("killCount"))
                    if (!$util.isInteger(message.killCount))
                        return "killCount: integer expected";
                return null;
            };

            /**
             * Creates an Entity message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cmsg.SNoticeWorldChange.Entity
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cmsg.SNoticeWorldChange.Entity} Entity
             */
            Entity.fromObject = function fromObject(object) {
                if (object instanceof $root.cmsg.SNoticeWorldChange.Entity)
                    return object;
                var message = new $root.cmsg.SNoticeWorldChange.Entity();
                if (object.id != null)
                    message.id = object.id | 0;
                if (object.hp != null)
                    message.hp = object.hp | 0;
                if (object.score != null)
                    message.score = object.score | 0;
                if (object.killCount != null)
                    message.killCount = object.killCount | 0;
                return message;
            };

            /**
             * Creates a plain object from an Entity message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cmsg.SNoticeWorldChange.Entity
             * @static
             * @param {cmsg.SNoticeWorldChange.Entity} message Entity
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Entity.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = 0;
                    object.hp = 0;
                    object.score = 0;
                    object.killCount = 0;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.hp != null && message.hasOwnProperty("hp"))
                    object.hp = message.hp;
                if (message.score != null && message.hasOwnProperty("score"))
                    object.score = message.score;
                if (message.killCount != null && message.hasOwnProperty("killCount"))
                    object.killCount = message.killCount;
                return object;
            };

            /**
             * Converts this Entity to JSON.
             * @function toJSON
             * @memberof cmsg.SNoticeWorldChange.Entity
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Entity.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Entity;
        })();

        return SNoticeWorldChange;
    })();

    cmsg.SNoticeWorldPos = (function() {

        /**
         * Properties of a SNoticeWorldPos.
         * @memberof cmsg
         * @interface ISNoticeWorldPos
         * @property {Array.<cmsg.SNoticeWorldPos.IEntity>|null} [entities] SNoticeWorldPos entities
         * @property {number|null} [lastProcessedInputID] SNoticeWorldPos lastProcessedInputID
         */

        /**
         * Constructs a new SNoticeWorldPos.
         * @memberof cmsg
         * @classdesc Represents a SNoticeWorldPos.
         * @implements ISNoticeWorldPos
         * @constructor
         * @param {cmsg.ISNoticeWorldPos=} [properties] Properties to set
         */
        function SNoticeWorldPos(properties) {
            this.entities = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SNoticeWorldPos entities.
         * @member {Array.<cmsg.SNoticeWorldPos.IEntity>} entities
         * @memberof cmsg.SNoticeWorldPos
         * @instance
         */
        SNoticeWorldPos.prototype.entities = $util.emptyArray;

        /**
         * SNoticeWorldPos lastProcessedInputID.
         * @member {number} lastProcessedInputID
         * @memberof cmsg.SNoticeWorldPos
         * @instance
         */
        SNoticeWorldPos.prototype.lastProcessedInputID = 0;

        /**
         * Creates a new SNoticeWorldPos instance using the specified properties.
         * @function create
         * @memberof cmsg.SNoticeWorldPos
         * @static
         * @param {cmsg.ISNoticeWorldPos=} [properties] Properties to set
         * @returns {cmsg.SNoticeWorldPos} SNoticeWorldPos instance
         */
        SNoticeWorldPos.create = function create(properties) {
            return new SNoticeWorldPos(properties);
        };

        /**
         * Encodes the specified SNoticeWorldPos message. Does not implicitly {@link cmsg.SNoticeWorldPos.verify|verify} messages.
         * @function encode
         * @memberof cmsg.SNoticeWorldPos
         * @static
         * @param {cmsg.ISNoticeWorldPos} message SNoticeWorldPos message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SNoticeWorldPos.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.entities != null && message.entities.length)
                for (var i = 0; i < message.entities.length; ++i)
                    $root.cmsg.SNoticeWorldPos.Entity.encode(message.entities[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.lastProcessedInputID != null && message.hasOwnProperty("lastProcessedInputID"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.lastProcessedInputID);
            return writer;
        };

        /**
         * Encodes the specified SNoticeWorldPos message, length delimited. Does not implicitly {@link cmsg.SNoticeWorldPos.verify|verify} messages.
         * @function encodeDelimited
         * @memberof cmsg.SNoticeWorldPos
         * @static
         * @param {cmsg.ISNoticeWorldPos} message SNoticeWorldPos message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SNoticeWorldPos.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SNoticeWorldPos message from the specified reader or buffer.
         * @function decode
         * @memberof cmsg.SNoticeWorldPos
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {cmsg.SNoticeWorldPos} SNoticeWorldPos
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SNoticeWorldPos.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cmsg.SNoticeWorldPos();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.entities && message.entities.length))
                        message.entities = [];
                    message.entities.push($root.cmsg.SNoticeWorldPos.Entity.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.lastProcessedInputID = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SNoticeWorldPos message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof cmsg.SNoticeWorldPos
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {cmsg.SNoticeWorldPos} SNoticeWorldPos
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SNoticeWorldPos.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SNoticeWorldPos message.
         * @function verify
         * @memberof cmsg.SNoticeWorldPos
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SNoticeWorldPos.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.entities != null && message.hasOwnProperty("entities")) {
                if (!Array.isArray(message.entities))
                    return "entities: array expected";
                for (var i = 0; i < message.entities.length; ++i) {
                    var error = $root.cmsg.SNoticeWorldPos.Entity.verify(message.entities[i]);
                    if (error)
                        return "entities." + error;
                }
            }
            if (message.lastProcessedInputID != null && message.hasOwnProperty("lastProcessedInputID"))
                if (!$util.isInteger(message.lastProcessedInputID))
                    return "lastProcessedInputID: integer expected";
            return null;
        };

        /**
         * Creates a SNoticeWorldPos message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof cmsg.SNoticeWorldPos
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {cmsg.SNoticeWorldPos} SNoticeWorldPos
         */
        SNoticeWorldPos.fromObject = function fromObject(object) {
            if (object instanceof $root.cmsg.SNoticeWorldPos)
                return object;
            var message = new $root.cmsg.SNoticeWorldPos();
            if (object.entities) {
                if (!Array.isArray(object.entities))
                    throw TypeError(".cmsg.SNoticeWorldPos.entities: array expected");
                message.entities = [];
                for (var i = 0; i < object.entities.length; ++i) {
                    if (typeof object.entities[i] !== "object")
                        throw TypeError(".cmsg.SNoticeWorldPos.entities: object expected");
                    message.entities[i] = $root.cmsg.SNoticeWorldPos.Entity.fromObject(object.entities[i]);
                }
            }
            if (object.lastProcessedInputID != null)
                message.lastProcessedInputID = object.lastProcessedInputID | 0;
            return message;
        };

        /**
         * Creates a plain object from a SNoticeWorldPos message. Also converts values to other types if specified.
         * @function toObject
         * @memberof cmsg.SNoticeWorldPos
         * @static
         * @param {cmsg.SNoticeWorldPos} message SNoticeWorldPos
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SNoticeWorldPos.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.entities = [];
            if (options.defaults)
                object.lastProcessedInputID = 0;
            if (message.entities && message.entities.length) {
                object.entities = [];
                for (var j = 0; j < message.entities.length; ++j)
                    object.entities[j] = $root.cmsg.SNoticeWorldPos.Entity.toObject(message.entities[j], options);
            }
            if (message.lastProcessedInputID != null && message.hasOwnProperty("lastProcessedInputID"))
                object.lastProcessedInputID = message.lastProcessedInputID;
            return object;
        };

        /**
         * Converts this SNoticeWorldPos to JSON.
         * @function toJSON
         * @memberof cmsg.SNoticeWorldPos
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SNoticeWorldPos.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        SNoticeWorldPos.Entity = (function() {

            /**
             * Properties of an Entity.
             * @memberof cmsg.SNoticeWorldPos
             * @interface IEntity
             * @property {number|null} [id] Entity id
             * @property {number|null} [x] Entity x
             * @property {number|null} [y] Entity y
             * @property {number|null} [rotation] Entity rotation
             */

            /**
             * Constructs a new Entity.
             * @memberof cmsg.SNoticeWorldPos
             * @classdesc Represents an Entity.
             * @implements IEntity
             * @constructor
             * @param {cmsg.SNoticeWorldPos.IEntity=} [properties] Properties to set
             */
            function Entity(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Entity id.
             * @member {number} id
             * @memberof cmsg.SNoticeWorldPos.Entity
             * @instance
             */
            Entity.prototype.id = 0;

            /**
             * Entity x.
             * @member {number} x
             * @memberof cmsg.SNoticeWorldPos.Entity
             * @instance
             */
            Entity.prototype.x = 0;

            /**
             * Entity y.
             * @member {number} y
             * @memberof cmsg.SNoticeWorldPos.Entity
             * @instance
             */
            Entity.prototype.y = 0;

            /**
             * Entity rotation.
             * @member {number} rotation
             * @memberof cmsg.SNoticeWorldPos.Entity
             * @instance
             */
            Entity.prototype.rotation = 0;

            /**
             * Creates a new Entity instance using the specified properties.
             * @function create
             * @memberof cmsg.SNoticeWorldPos.Entity
             * @static
             * @param {cmsg.SNoticeWorldPos.IEntity=} [properties] Properties to set
             * @returns {cmsg.SNoticeWorldPos.Entity} Entity instance
             */
            Entity.create = function create(properties) {
                return new Entity(properties);
            };

            /**
             * Encodes the specified Entity message. Does not implicitly {@link cmsg.SNoticeWorldPos.Entity.verify|verify} messages.
             * @function encode
             * @memberof cmsg.SNoticeWorldPos.Entity
             * @static
             * @param {cmsg.SNoticeWorldPos.IEntity} message Entity message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Entity.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
                if (message.x != null && message.hasOwnProperty("x"))
                    writer.uint32(/* id 2, wireType 5 =*/21).float(message.x);
                if (message.y != null && message.hasOwnProperty("y"))
                    writer.uint32(/* id 3, wireType 5 =*/29).float(message.y);
                if (message.rotation != null && message.hasOwnProperty("rotation"))
                    writer.uint32(/* id 4, wireType 5 =*/37).float(message.rotation);
                return writer;
            };

            /**
             * Encodes the specified Entity message, length delimited. Does not implicitly {@link cmsg.SNoticeWorldPos.Entity.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cmsg.SNoticeWorldPos.Entity
             * @static
             * @param {cmsg.SNoticeWorldPos.IEntity} message Entity message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Entity.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Entity message from the specified reader or buffer.
             * @function decode
             * @memberof cmsg.SNoticeWorldPos.Entity
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cmsg.SNoticeWorldPos.Entity} Entity
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Entity.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cmsg.SNoticeWorldPos.Entity();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.int32();
                        break;
                    case 2:
                        message.x = reader.float();
                        break;
                    case 3:
                        message.y = reader.float();
                        break;
                    case 4:
                        message.rotation = reader.float();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Entity message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cmsg.SNoticeWorldPos.Entity
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cmsg.SNoticeWorldPos.Entity} Entity
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Entity.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Entity message.
             * @function verify
             * @memberof cmsg.SNoticeWorldPos.Entity
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Entity.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isInteger(message.id))
                        return "id: integer expected";
                if (message.x != null && message.hasOwnProperty("x"))
                    if (typeof message.x !== "number")
                        return "x: number expected";
                if (message.y != null && message.hasOwnProperty("y"))
                    if (typeof message.y !== "number")
                        return "y: number expected";
                if (message.rotation != null && message.hasOwnProperty("rotation"))
                    if (typeof message.rotation !== "number")
                        return "rotation: number expected";
                return null;
            };

            /**
             * Creates an Entity message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cmsg.SNoticeWorldPos.Entity
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cmsg.SNoticeWorldPos.Entity} Entity
             */
            Entity.fromObject = function fromObject(object) {
                if (object instanceof $root.cmsg.SNoticeWorldPos.Entity)
                    return object;
                var message = new $root.cmsg.SNoticeWorldPos.Entity();
                if (object.id != null)
                    message.id = object.id | 0;
                if (object.x != null)
                    message.x = Number(object.x);
                if (object.y != null)
                    message.y = Number(object.y);
                if (object.rotation != null)
                    message.rotation = Number(object.rotation);
                return message;
            };

            /**
             * Creates a plain object from an Entity message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cmsg.SNoticeWorldPos.Entity
             * @static
             * @param {cmsg.SNoticeWorldPos.Entity} message Entity
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Entity.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = 0;
                    object.x = 0;
                    object.y = 0;
                    object.rotation = 0;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.x != null && message.hasOwnProperty("x"))
                    object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
                if (message.y != null && message.hasOwnProperty("y"))
                    object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
                if (message.rotation != null && message.hasOwnProperty("rotation"))
                    object.rotation = options.json && !isFinite(message.rotation) ? String(message.rotation) : message.rotation;
                return object;
            };

            /**
             * Converts this Entity to JSON.
             * @function toJSON
             * @memberof cmsg.SNoticeWorldPos.Entity
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Entity.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Entity;
        })();

        return SNoticeWorldPos;
    })();

    cmsg.Entity = (function() {

        /**
         * Properties of an Entity.
         * @memberof cmsg
         * @interface IEntity
         * @property {number|null} [id] Entity id
         * @property {number|null} [accountType] Entity accountType
         * @property {string|null} [headImgUrl] Entity headImgUrl
         * @property {number|null} [rotation] Entity rotation
         * @property {number|null} [hp] Entity hp
         * @property {number|null} [score] Entity score
         * @property {number|null} [killCount] Entity killCount
         * @property {boolean|null} [dead] Entity dead
         * @property {boolean|null} ["protected"] Entity protected
         * @property {number|null} [x] Entity x
         * @property {number|null} [y] Entity y
         * @property {string|null} [nickname] Entity nickname
         */

        /**
         * Constructs a new Entity.
         * @memberof cmsg
         * @classdesc Represents an Entity.
         * @implements IEntity
         * @constructor
         * @param {cmsg.IEntity=} [properties] Properties to set
         */
        function Entity(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Entity id.
         * @member {number} id
         * @memberof cmsg.Entity
         * @instance
         */
        Entity.prototype.id = 0;

        /**
         * Entity accountType.
         * @member {number} accountType
         * @memberof cmsg.Entity
         * @instance
         */
        Entity.prototype.accountType = 0;

        /**
         * Entity headImgUrl.
         * @member {string} headImgUrl
         * @memberof cmsg.Entity
         * @instance
         */
        Entity.prototype.headImgUrl = "";

        /**
         * Entity rotation.
         * @member {number} rotation
         * @memberof cmsg.Entity
         * @instance
         */
        Entity.prototype.rotation = 0;

        /**
         * Entity hp.
         * @member {number} hp
         * @memberof cmsg.Entity
         * @instance
         */
        Entity.prototype.hp = 0;

        /**
         * Entity score.
         * @member {number} score
         * @memberof cmsg.Entity
         * @instance
         */
        Entity.prototype.score = 0;

        /**
         * Entity killCount.
         * @member {number} killCount
         * @memberof cmsg.Entity
         * @instance
         */
        Entity.prototype.killCount = 0;

        /**
         * Entity dead.
         * @member {boolean} dead
         * @memberof cmsg.Entity
         * @instance
         */
        Entity.prototype.dead = false;

        /**
         * Entity protected.
         * @member {boolean} protected
         * @memberof cmsg.Entity
         * @instance
         */
        Entity.prototype["protected"] = false;

        /**
         * Entity x.
         * @member {number} x
         * @memberof cmsg.Entity
         * @instance
         */
        Entity.prototype.x = 0;

        /**
         * Entity y.
         * @member {number} y
         * @memberof cmsg.Entity
         * @instance
         */
        Entity.prototype.y = 0;

        /**
         * Entity nickname.
         * @member {string} nickname
         * @memberof cmsg.Entity
         * @instance
         */
        Entity.prototype.nickname = "";

        /**
         * Creates a new Entity instance using the specified properties.
         * @function create
         * @memberof cmsg.Entity
         * @static
         * @param {cmsg.IEntity=} [properties] Properties to set
         * @returns {cmsg.Entity} Entity instance
         */
        Entity.create = function create(properties) {
            return new Entity(properties);
        };

        /**
         * Encodes the specified Entity message. Does not implicitly {@link cmsg.Entity.verify|verify} messages.
         * @function encode
         * @memberof cmsg.Entity
         * @static
         * @param {cmsg.IEntity} message Entity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Entity.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.accountType != null && message.hasOwnProperty("accountType"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.accountType);
            if (message.headImgUrl != null && message.hasOwnProperty("headImgUrl"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.headImgUrl);
            if (message.rotation != null && message.hasOwnProperty("rotation"))
                writer.uint32(/* id 4, wireType 5 =*/37).float(message.rotation);
            if (message.hp != null && message.hasOwnProperty("hp"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.hp);
            if (message.score != null && message.hasOwnProperty("score"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.score);
            if (message.killCount != null && message.hasOwnProperty("killCount"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.killCount);
            if (message.dead != null && message.hasOwnProperty("dead"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.dead);
            if (message["protected"] != null && message.hasOwnProperty("protected"))
                writer.uint32(/* id 9, wireType 0 =*/72).bool(message["protected"]);
            if (message.x != null && message.hasOwnProperty("x"))
                writer.uint32(/* id 10, wireType 5 =*/85).float(message.x);
            if (message.y != null && message.hasOwnProperty("y"))
                writer.uint32(/* id 11, wireType 5 =*/93).float(message.y);
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.nickname);
            return writer;
        };

        /**
         * Encodes the specified Entity message, length delimited. Does not implicitly {@link cmsg.Entity.verify|verify} messages.
         * @function encodeDelimited
         * @memberof cmsg.Entity
         * @static
         * @param {cmsg.IEntity} message Entity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Entity.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Entity message from the specified reader or buffer.
         * @function decode
         * @memberof cmsg.Entity
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {cmsg.Entity} Entity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Entity.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cmsg.Entity();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                case 2:
                    message.accountType = reader.int32();
                    break;
                case 3:
                    message.headImgUrl = reader.string();
                    break;
                case 4:
                    message.rotation = reader.float();
                    break;
                case 5:
                    message.hp = reader.int32();
                    break;
                case 6:
                    message.score = reader.int32();
                    break;
                case 7:
                    message.killCount = reader.int32();
                    break;
                case 8:
                    message.dead = reader.bool();
                    break;
                case 9:
                    message["protected"] = reader.bool();
                    break;
                case 10:
                    message.x = reader.float();
                    break;
                case 11:
                    message.y = reader.float();
                    break;
                case 12:
                    message.nickname = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Entity message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof cmsg.Entity
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {cmsg.Entity} Entity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Entity.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Entity message.
         * @function verify
         * @memberof cmsg.Entity
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Entity.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.accountType != null && message.hasOwnProperty("accountType"))
                if (!$util.isInteger(message.accountType))
                    return "accountType: integer expected";
            if (message.headImgUrl != null && message.hasOwnProperty("headImgUrl"))
                if (!$util.isString(message.headImgUrl))
                    return "headImgUrl: string expected";
            if (message.rotation != null && message.hasOwnProperty("rotation"))
                if (typeof message.rotation !== "number")
                    return "rotation: number expected";
            if (message.hp != null && message.hasOwnProperty("hp"))
                if (!$util.isInteger(message.hp))
                    return "hp: integer expected";
            if (message.score != null && message.hasOwnProperty("score"))
                if (!$util.isInteger(message.score))
                    return "score: integer expected";
            if (message.killCount != null && message.hasOwnProperty("killCount"))
                if (!$util.isInteger(message.killCount))
                    return "killCount: integer expected";
            if (message.dead != null && message.hasOwnProperty("dead"))
                if (typeof message.dead !== "boolean")
                    return "dead: boolean expected";
            if (message["protected"] != null && message.hasOwnProperty("protected"))
                if (typeof message["protected"] !== "boolean")
                    return "protected: boolean expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (typeof message.x !== "number")
                    return "x: number expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (typeof message.y !== "number")
                    return "y: number expected";
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                if (!$util.isString(message.nickname))
                    return "nickname: string expected";
            return null;
        };

        /**
         * Creates an Entity message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof cmsg.Entity
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {cmsg.Entity} Entity
         */
        Entity.fromObject = function fromObject(object) {
            if (object instanceof $root.cmsg.Entity)
                return object;
            var message = new $root.cmsg.Entity();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.accountType != null)
                message.accountType = object.accountType | 0;
            if (object.headImgUrl != null)
                message.headImgUrl = String(object.headImgUrl);
            if (object.rotation != null)
                message.rotation = Number(object.rotation);
            if (object.hp != null)
                message.hp = object.hp | 0;
            if (object.score != null)
                message.score = object.score | 0;
            if (object.killCount != null)
                message.killCount = object.killCount | 0;
            if (object.dead != null)
                message.dead = Boolean(object.dead);
            if (object["protected"] != null)
                message["protected"] = Boolean(object["protected"]);
            if (object.x != null)
                message.x = Number(object.x);
            if (object.y != null)
                message.y = Number(object.y);
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            return message;
        };

        /**
         * Creates a plain object from an Entity message. Also converts values to other types if specified.
         * @function toObject
         * @memberof cmsg.Entity
         * @static
         * @param {cmsg.Entity} message Entity
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Entity.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.accountType = 0;
                object.headImgUrl = "";
                object.rotation = 0;
                object.hp = 0;
                object.score = 0;
                object.killCount = 0;
                object.dead = false;
                object["protected"] = false;
                object.x = 0;
                object.y = 0;
                object.nickname = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.accountType != null && message.hasOwnProperty("accountType"))
                object.accountType = message.accountType;
            if (message.headImgUrl != null && message.hasOwnProperty("headImgUrl"))
                object.headImgUrl = message.headImgUrl;
            if (message.rotation != null && message.hasOwnProperty("rotation"))
                object.rotation = options.json && !isFinite(message.rotation) ? String(message.rotation) : message.rotation;
            if (message.hp != null && message.hasOwnProperty("hp"))
                object.hp = message.hp;
            if (message.score != null && message.hasOwnProperty("score"))
                object.score = message.score;
            if (message.killCount != null && message.hasOwnProperty("killCount"))
                object.killCount = message.killCount;
            if (message.dead != null && message.hasOwnProperty("dead"))
                object.dead = message.dead;
            if (message["protected"] != null && message.hasOwnProperty("protected"))
                object["protected"] = message["protected"];
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            return object;
        };

        /**
         * Converts this Entity to JSON.
         * @function toJSON
         * @memberof cmsg.Entity
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Entity.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Entity;
    })();

    cmsg.SNoticeNewEntity = (function() {

        /**
         * Properties of a SNoticeNewEntity.
         * @memberof cmsg
         * @interface ISNoticeNewEntity
         * @property {cmsg.IEntity|null} [entity] SNoticeNewEntity entity
         */

        /**
         * Constructs a new SNoticeNewEntity.
         * @memberof cmsg
         * @classdesc Represents a SNoticeNewEntity.
         * @implements ISNoticeNewEntity
         * @constructor
         * @param {cmsg.ISNoticeNewEntity=} [properties] Properties to set
         */
        function SNoticeNewEntity(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SNoticeNewEntity entity.
         * @member {cmsg.IEntity|null|undefined} entity
         * @memberof cmsg.SNoticeNewEntity
         * @instance
         */
        SNoticeNewEntity.prototype.entity = null;

        /**
         * Creates a new SNoticeNewEntity instance using the specified properties.
         * @function create
         * @memberof cmsg.SNoticeNewEntity
         * @static
         * @param {cmsg.ISNoticeNewEntity=} [properties] Properties to set
         * @returns {cmsg.SNoticeNewEntity} SNoticeNewEntity instance
         */
        SNoticeNewEntity.create = function create(properties) {
            return new SNoticeNewEntity(properties);
        };

        /**
         * Encodes the specified SNoticeNewEntity message. Does not implicitly {@link cmsg.SNoticeNewEntity.verify|verify} messages.
         * @function encode
         * @memberof cmsg.SNoticeNewEntity
         * @static
         * @param {cmsg.ISNoticeNewEntity} message SNoticeNewEntity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SNoticeNewEntity.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.entity != null && message.hasOwnProperty("entity"))
                $root.cmsg.Entity.encode(message.entity, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SNoticeNewEntity message, length delimited. Does not implicitly {@link cmsg.SNoticeNewEntity.verify|verify} messages.
         * @function encodeDelimited
         * @memberof cmsg.SNoticeNewEntity
         * @static
         * @param {cmsg.ISNoticeNewEntity} message SNoticeNewEntity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SNoticeNewEntity.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SNoticeNewEntity message from the specified reader or buffer.
         * @function decode
         * @memberof cmsg.SNoticeNewEntity
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {cmsg.SNoticeNewEntity} SNoticeNewEntity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SNoticeNewEntity.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cmsg.SNoticeNewEntity();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.entity = $root.cmsg.Entity.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SNoticeNewEntity message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof cmsg.SNoticeNewEntity
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {cmsg.SNoticeNewEntity} SNoticeNewEntity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SNoticeNewEntity.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SNoticeNewEntity message.
         * @function verify
         * @memberof cmsg.SNoticeNewEntity
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SNoticeNewEntity.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.entity != null && message.hasOwnProperty("entity")) {
                var error = $root.cmsg.Entity.verify(message.entity);
                if (error)
                    return "entity." + error;
            }
            return null;
        };

        /**
         * Creates a SNoticeNewEntity message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof cmsg.SNoticeNewEntity
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {cmsg.SNoticeNewEntity} SNoticeNewEntity
         */
        SNoticeNewEntity.fromObject = function fromObject(object) {
            if (object instanceof $root.cmsg.SNoticeNewEntity)
                return object;
            var message = new $root.cmsg.SNoticeNewEntity();
            if (object.entity != null) {
                if (typeof object.entity !== "object")
                    throw TypeError(".cmsg.SNoticeNewEntity.entity: object expected");
                message.entity = $root.cmsg.Entity.fromObject(object.entity);
            }
            return message;
        };

        /**
         * Creates a plain object from a SNoticeNewEntity message. Also converts values to other types if specified.
         * @function toObject
         * @memberof cmsg.SNoticeNewEntity
         * @static
         * @param {cmsg.SNoticeNewEntity} message SNoticeNewEntity
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SNoticeNewEntity.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.entity = null;
            if (message.entity != null && message.hasOwnProperty("entity"))
                object.entity = $root.cmsg.Entity.toObject(message.entity, options);
            return object;
        };

        /**
         * Converts this SNoticeNewEntity to JSON.
         * @function toJSON
         * @memberof cmsg.SNoticeNewEntity
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SNoticeNewEntity.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SNoticeNewEntity;
    })();

    cmsg.SNoticeKickOut = (function() {

        /**
         * Properties of a SNoticeKickOut.
         * @memberof cmsg
         * @interface ISNoticeKickOut
         * @property {cmsg.SNoticeKickOut.Reason|null} [reason] SNoticeKickOut reason
         */

        /**
         * Constructs a new SNoticeKickOut.
         * @memberof cmsg
         * @classdesc Represents a SNoticeKickOut.
         * @implements ISNoticeKickOut
         * @constructor
         * @param {cmsg.ISNoticeKickOut=} [properties] Properties to set
         */
        function SNoticeKickOut(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SNoticeKickOut reason.
         * @member {cmsg.SNoticeKickOut.Reason} reason
         * @memberof cmsg.SNoticeKickOut
         * @instance
         */
        SNoticeKickOut.prototype.reason = 0;

        /**
         * Creates a new SNoticeKickOut instance using the specified properties.
         * @function create
         * @memberof cmsg.SNoticeKickOut
         * @static
         * @param {cmsg.ISNoticeKickOut=} [properties] Properties to set
         * @returns {cmsg.SNoticeKickOut} SNoticeKickOut instance
         */
        SNoticeKickOut.create = function create(properties) {
            return new SNoticeKickOut(properties);
        };

        /**
         * Encodes the specified SNoticeKickOut message. Does not implicitly {@link cmsg.SNoticeKickOut.verify|verify} messages.
         * @function encode
         * @memberof cmsg.SNoticeKickOut
         * @static
         * @param {cmsg.ISNoticeKickOut} message SNoticeKickOut message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SNoticeKickOut.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reason != null && message.hasOwnProperty("reason"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.reason);
            return writer;
        };

        /**
         * Encodes the specified SNoticeKickOut message, length delimited. Does not implicitly {@link cmsg.SNoticeKickOut.verify|verify} messages.
         * @function encodeDelimited
         * @memberof cmsg.SNoticeKickOut
         * @static
         * @param {cmsg.ISNoticeKickOut} message SNoticeKickOut message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SNoticeKickOut.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SNoticeKickOut message from the specified reader or buffer.
         * @function decode
         * @memberof cmsg.SNoticeKickOut
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {cmsg.SNoticeKickOut} SNoticeKickOut
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SNoticeKickOut.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cmsg.SNoticeKickOut();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.reason = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SNoticeKickOut message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof cmsg.SNoticeKickOut
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {cmsg.SNoticeKickOut} SNoticeKickOut
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SNoticeKickOut.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SNoticeKickOut message.
         * @function verify
         * @memberof cmsg.SNoticeKickOut
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SNoticeKickOut.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reason != null && message.hasOwnProperty("reason"))
                switch (message.reason) {
                default:
                    return "reason: enum value expected";
                case 0:
                case 1:
                    break;
                }
            return null;
        };

        /**
         * Creates a SNoticeKickOut message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof cmsg.SNoticeKickOut
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {cmsg.SNoticeKickOut} SNoticeKickOut
         */
        SNoticeKickOut.fromObject = function fromObject(object) {
            if (object instanceof $root.cmsg.SNoticeKickOut)
                return object;
            var message = new $root.cmsg.SNoticeKickOut();
            switch (object.reason) {
            case "Invalid":
            case 0:
                message.reason = 0;
                break;
            case "Relogin":
            case 1:
                message.reason = 1;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a SNoticeKickOut message. Also converts values to other types if specified.
         * @function toObject
         * @memberof cmsg.SNoticeKickOut
         * @static
         * @param {cmsg.SNoticeKickOut} message SNoticeKickOut
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SNoticeKickOut.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.reason = options.enums === String ? "Invalid" : 0;
            if (message.reason != null && message.hasOwnProperty("reason"))
                object.reason = options.enums === String ? $root.cmsg.SNoticeKickOut.Reason[message.reason] : message.reason;
            return object;
        };

        /**
         * Converts this SNoticeKickOut to JSON.
         * @function toJSON
         * @memberof cmsg.SNoticeKickOut
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SNoticeKickOut.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Reason enum.
         * @name cmsg.SNoticeKickOut.Reason
         * @enum {string}
         * @property {number} Invalid=0 Invalid value
         * @property {number} Relogin=1 Relogin value
         */
        SNoticeKickOut.Reason = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Invalid"] = 0;
            values[valuesById[1] = "Relogin"] = 1;
            return values;
        })();

        return SNoticeKickOut;
    })();

    return cmsg;
})();

module.exports = $root;
