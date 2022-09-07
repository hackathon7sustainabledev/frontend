import React, { Component } from "react";
import polyUtil from "polyline-encoded";
import { Map, Marker, GoogleApiWrapper, Polyline } from "google-maps-react";

/*global google*/

const customizeMap = {
  width: "38.4%",
  height: "37.6%",
};

var polyline_coords = [];

class GoogleMapComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    //   cords: [
    //     { latitude: 12.840315, longitude: 80.15305 },

    //     { latitude: 31.046051, longitude: 34.851612 },
    //     // { latitude: 51.165691, longitude: 10.451526 },
    //     // { latitude: 52.215933, longitude: 19.134422 },
    //     // { latitude: 50.0874654, longitude: 14.4212535 },
    //     // { latitude: 7.5554942, longitude: 80.7137847 },
    //   ],
      polyline_coords: [],
    };
    var latlngs = polyUtil.decode(
      "{}jmAc}ehNhCv@vKeKhEkAxBW`BoA|NwPlh@wl@xlAcuAnl@ct@`QoStXmc@rG}KfMs_@|Moa@fCiPpEuY|N_ZdJrBpCr@`ErA?iAEcB@MJMbH_@lAwA~@oDF}Bz@uAlBcGjDkUHiF[{AkAgAaHqEl@_Nj@w`@}AmMhA}IWgB{@yBy@q@q@KjAc@lGeCxRuIhNsFtJ]pNJ~M|Cl_@nJb^rIfjAjZvl@zPpTvHzTlGlp@fRfo@dSpo@pQ`KvCvSdCdJzAzT|Gvk@xQlc@`Nnn@fPbZdIzG~@vLt@zMdEdIrBfJh@t\\nBdLnAzGfB`P~F~RlKv]fOxIpExMdFle@lOzn@nNhGfB`Fn@lN^vIQnCu@hC@cDA{CfAmJ?mOm@iHwAmAMi^qIiKqBsO{E_g@uPwWqMgLmEkRyJiY{KyQgCid@kCmKoB{JmDmEy@}N_AoYmHop@}PkkA{^qXoImJ}BaUeC{MoDso@qQ_o@cSgl@qPc`@aLgP}Fgy@eU_aAaWi{@}SgJuBwFQiLAcGd@cV`K_QpHTlBn@bDmAbL`BhM]vS{@rZzH~Et@dA\\pBSxEs@tGiCbNcBlEw@zACvBgA|DeAz@gHb@AdEpP|G}@O_EeBmDeBiQeFcFoAqA|ByLrVaCvOqDbW}HrV{Rpl@sClFaLnQyOzV}E~FcX|[eLnN}PtSmjAjrAcd@hh@yMjOcK`KuD\\}C`BiW~UsHpGiGnBkEvAs@tCqAnGcDjHkEtIkFjIuNfNqUxT_WxUcEbEcDlEgTbu@{Kv_@eT|s@_B`MkHly@}Kbb@{D~KwI|NaIlY{AzG[z@wEqAeEq@qBi@oJuCaIiDsCmAmOwE{QiGsIcF{Y}Rs_@gXcNuJsKwGkGwEkBiCiFwJaB{AiBo@kJq@}FQaNn@abAnGgg@|BmLRiEa@uGkBuDuBqDeDyKeP_CsC}DyBaXqLcEsCwBuCkAmCeDmOiG}XoBoD}CsCoCuAcE_AqR_@qR?sYn@cd@|@eEGih@aJeIm@qSc@cTm@ed@eCiDi@qMqGyUyMcMmF{F{@}EOgd@QuCU_G{AkF_DmM{P_VqYqSqX_Xw]qHeJaEaD_L{EoHgAiNe@yYs@kS_@ec@aAoFcAiEmCuCsE_JsSmNoUkEuEaHaDuIu@sGLe@Z]hAd@bAnAPxAiAFgN@eG]_EgCkDcD_D{DcG}@{C?cI_@aE}Qs[a@iEOoF_DiGeHgLiEaLkCsOcF{OyB_EcDwEB_PkC{EeBgGw@eDc@gBs@k@wAy@gAuDqN~@}E\\Bn@APA@"
    );
    polyline_coords = latlngs;
    this.setState({ polyline_coords: latlngs });
  }

  drawMarker = (index) => {
    if (polyline_coords.length === 0) return;
    const latlngs = polyline_coords;
    return (
      <Marker
        key={index}
        id={index}
        position={{
          lat: latlngs[index][0],
          lng: latlngs[index][1],
        }}
        onClick={() => console.log("Event Handler Called")}
      />
    );
  };

  getPolyLine = () => {
    if (polyline_coords.length === 0) return;
    let latlngs = [];
    for (let i = 0; i < polyline_coords.length; i++) {
      latlngs.push({ lat: polyline_coords[i][0], lng: polyline_coords[i][1] });
    }
    return (
      <Polyline
        path={latlngs}
        strokeColor="#ff0000"
        strokeOpacity={1}
        strokeWeight={2}
      />
    );
  };

  render() {
    return (
      <Map
        google={this.props.google}
        style={customizeMap}
        zoom={6}
        initialCenter={{
          lat: 9.96233,
          lng: 49.80404,
        }}
      >
        {this.getPolyLine()}
        {this.drawMarker(0)}
        {this.drawMarker(polyline_coords.length - 1)}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyA9ngIEeBxfgY6ZpcOg5LJFkvsxvN3t2kY",
})(GoogleMapComponent);
