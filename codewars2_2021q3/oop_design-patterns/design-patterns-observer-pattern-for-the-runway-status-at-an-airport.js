(function () {
  let ATCClient, AirportInformationSystem, GroundServiceClient,
    __bind = function (fn, me) {
      return function () {
        return fn.apply(me, arguments);
      };
    };

  AirportInformationSystem = (function () {
    function AirportInformationSystem() {
      this.subscribers = {};
      this.id = 1;
    }

    AirportInformationSystem.prototype.subscribe = function (runway, onStatusChangeCallback) {
      this.subscribers[this.id] = {
        'runway': runway,
        'callback': onStatusChangeCallback
      };
      return this.id++;
    };

    AirportInformationSystem.prototype.unsubscribe = function (subscriberID) {
      return delete this.subscribers[subscriberID];
    };

    AirportInformationSystem.prototype.updateRunwayStatus = function (runway, status) {
      let id, watcher, _ref, _results;
      _ref = this.subscribers;
      _results = [];
      for (id in _ref) {
        watcher = _ref[id];
        if (watcher.runway === runway) {
          _results.push(watcher.callback(status, runway));
        }
      }
      return _results;
    };

    return AirportInformationSystem;

  })();

  GroundServiceClient = (function () {
    function GroundServiceClient(_at_AirportInformationSystem) {
      this.AirportInformationSystem = _at_AirportInformationSystem;
      this.onStatusChange = __bind(this.onStatusChange, this);
      this.runwayStatus = "";
    }

    GroundServiceClient.prototype.subscribe = function (runway) {
      return this.myid = this.AirportInformationSystem.subscribe(runway, this.onStatusChange);
    };

    GroundServiceClient.prototype.unsubscribe = function () {
      return this.AirportInformationSystem.unsubscribe(this.myid);
    };

    GroundServiceClient.prototype.onStatusChange = function (status) {
      return this.runwayStatus = status;
    };

    return GroundServiceClient;

  })();

  ATCClient = (function () {
    function ATCClient(_at_AirportInformationSystem) {
      this.AirportInformationSystem = _at_AirportInformationSystem;
      this.onStatusChange = __bind(this.onStatusChange, this);
      this.runways = {};
    }

    ATCClient.prototype.subscribe = function (runway) {
      return this.runways[runway] = {
        'id': this.AirportInformationSystem.subscribe(runway, this.onStatusChange)
      };
    };

    ATCClient.prototype.unsubscribe = function (runway) {
      return this.AirportInformationSystem.unsubscribe(this.runways[runway].id);
    };

    ATCClient.prototype.onStatusChange = function (status, runway) {
      return this.runways[runway].runwayStatus = status;
    };

    return ATCClient;

  })();

}).call(this);
