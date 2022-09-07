import React, { Component } from "react";
import polyUtil from "polyline-encoded";
import { Map, Marker, GoogleApiWrapper, Polyline } from "google-maps-react";

/*global google*/

const customizeMap = {
  width: "38.4%",
  height: "37.6%",
};

var polyline_coords = [];
var destinations = [];
class GoogleMapComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      polyline_coords: [],
      destinations: [],
    };
    var latlngs = polyUtil.decode(
      "{}jmAc}ehNhCv@vKeKhEkAxBW`BoA|NwPlh@wl@xlAcuAnl@ct@`QoStXmc@rG}KfMs_@|Moa@fCiPpEuY|N_ZdJrBpCr@`ErA?iAEcB@MJMbH_@lAwA~@oDF}Bz@uAlBcGjDkUHiF[{AkAgAaHqEl@_Nj@w`@}AmMhA}IWgB{@yBy@q@q@KjAc@lGeCxRuIhNsFtJ]pNJ~M|Cl_@nJb^rIfjAjZvl@zPpTvHzTlGlp@fRfo@dSpo@pQ`KvCvSdCdJzAzT|Gvk@xQlc@`Nnn@fPbZdIzG~@vLt@zMdEdIrBfJh@t\\nBdLnAzGfB`P~F~RlKv]fOxIpExMdFle@lOzn@nNhGfB`Fn@lN^vIQnCu@hC@cDA{CfAmJ?mOm@iHwAmAMi^qIiKqBsO{E_g@uPwWqMgLmEkRyJiY{KyQgCid@kCmKoB{JmDmEy@}N_AoYmHop@}PkkA{^qXoImJ}BaUeC{MoDso@qQ_o@cSgl@qPc`@aLgP}Fgy@eU_aAaWi{@}SgJuBwFQiLAcGd@cV`K_QpHTlBn@bDmAbL`BhM]vS{@rZzH~Et@dA\\pBSxEs@tGiCbNcBlEw@zACvBgA|DeAz@gHb@AdEpP|G}@O_EeBmDeBiQeFcFoAqA|ByLrVaCvOqDbW}HrV{Rpl@sClFaLnQyOzV}E~FcX|[eLnN}PtSmjAjrAcd@hh@yMjOcK`KuD\\}C`BiW~UsHpGiGnBkEvAs@tCqAnGcDjHkEtIkFjIuNfNqUxT_WxUcEbEcDlEgTbu@{Kv_@eT|s@_B`MkHly@}Kbb@{D~KwI|NaIlY{AzG[z@wEqAeEq@qBi@oJuCaIiDsCmAmOwE{QiGsIcF{Y}Rs_@gXcNuJsKwGkGwEkBiCiFwJaB{AiBo@kJq@}FQaNn@abAnGgg@|BmLRiEa@uGkBuDuBqDeDyKeP_CsC}DyBaXqLcEsCwBuCkAmCeDmOiG}XoBoD}CsCoCuAcE_AqR_@qR?sYn@cd@|@eEGih@aJeIm@qSc@cTm@ed@eCiDi@qMqGyUyMcMmF{F{@}EOgd@QuCU_G{AkF_DmM{P_VqYqSqX_Xw]qHeJaEaD_L{EoHgAiNe@yYs@kS_@ec@aAoFcAiEmCuCsE_JsSmNoUkEuEaHaDuIu@sGLe@Z]hAd@bAnAPxAiAFgN@eG]_EgCkDcD_D{DcG}@{C?cI_@aE}Qs[a@iEOoF_DiGeHgLiEaLkCsOcF{OyB_EcDwEB_PkC{EeBgGw@eDc@gBs@k@wAy@gAuDqN~@}E\\Bn@APA@"
    );
    destinations = this.props.destinations;
    polyline_coords = latlngs;
    // let temp = [];
    // for (let i = 0; i < this.props.destinations.length; i++) {
    //   console.log(this.props.destinations[i].lat);
    //   temp.push({
    //     lat: this.props.destinations[i].lat,
    //     lng: this.props.destinations[i].lng,
    //   });
    // }
    // destinations = temp;
    // console.log(temp);
  }

  getCenter = () => {
    var min_lat, max_lat, min_long, max_long;
    min_lat = max_lat = destinations[0].lat;
    min_long = max_long = destinations[0].lng;
    for (var i = 0; i < destinations.length; i++) {
      min_lat = Math.min(destinations[i].lat, min_lat);
      max_lat = Math.max(destinations[i].lat, max_lat);
      min_long = Math.min(destinations[i].lng, min_long);
      max_long = Math.max(destinations[i].lng, max_long);
    }
    var center_lat = (min_lat + max_lat) / 2;
    var center_long = (min_long + max_long) / 2;
    return { lat: center_lat, lng: center_long };
  };

  drawMarker = (data, index) => {
    if (this.state.destinations.length === 0) return;
    const latlngs = this.state.destinations;
    return (
      <Marker
        key={index}
        id={index}
        position={{
          lat: latlngs[index].lat,
          lng: latlngs[index].lng,
        }}
        onClick={() => console.log("Event Handler Called")}
      />
    );
  };

  getMarkers = () => {
    return this.state.destinations.map(this.drawMarker);
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
        zoom={9}
        initialCenter={this.getCenter()}
      >
        {this.getPolyLine()}
        {destinations !== [] &&
          destinations.map((data, index) => {
            return (
              <Marker
                key={index}
                id={index}
                position={{
                  lat: data.lat,
                  lng: data.lng,
                }}
                onClick={() => console.log("Event Handler Called")}
              />
            );
          })}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyA9ngIEeBxfgY6ZpcOg5LJFkvsxvN3t2kY",
})(GoogleMapComponent);