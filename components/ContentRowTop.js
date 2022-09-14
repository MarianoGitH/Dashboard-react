import darth from "../assets/images/mandalorian.jpg";
import HumGauge from "./HumGauge";
import LineChartLarge from "./LineChartLarge";
import SensorMap from "./SensorMap";
import TempGauge from "./TempGauge";

function ContentRowTop() {
  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-2000">Dashboard</h1>
      </div>

      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card border-left-success shadow h-100 py-2">
            <div className="card-body text-center">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                    Temperatura [°C]
                  </div>
                  
                </div>
                <div className="justify-content-center">
                  <TempGauge />
                </div>
              </div>
               
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card border-left-warning shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-success text-center text-uppercase mb-1">
                    {" "}
                    Humedad [%]
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
               
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <HumGauge />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6 mb-4">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h5 className="m-0 font-weight-bold text-gray-800">
                Últimas 24 hs
              </h5>
              
            </div>
            <div className="card-body">
              <div className="text-center">
                  <LineChartLarge />  
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6 mb-4">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h5 className="m-0 font-weight-bold text-gray-800">
                Ubicación del Sensor
              </h5>
            </div>
            <div className="card-body">
              <div className="text-center">
                <SensorMap />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentRowTop;
