import React from "react";
import { alerts } from "./Bienvenido";

class Botones extends alerts {

    render() {
        <div>
            <button onClick={() => alert('alerts.m1')}>Modulo 1</button>
            <button onClick={() => alert('alerts.m2')}>Modulo 2</button>
        </div>
    }
}
export default Botones;