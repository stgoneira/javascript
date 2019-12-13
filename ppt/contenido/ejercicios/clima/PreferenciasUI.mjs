export class PreferenciasUI {
    constructor(){
        let g = id => document.getElementById(id);
        this.btnPreferencias = g('btn-preferencias');
        this.preferencias = g('preferencias');
        this.preferencias.style.display = 'none';
        this.btnGuardar = document.querySelector('#preferencias button');
        this.form = document.querySelector('#preferencias form');
    }

    ocultar() {
        this.preferencias.style.display = 'none';
    }

    activar() {
        this.btnPreferencias.onclick = (e) => {
            let state = this.preferencias.style.display;
            let newState = state == 'none'?'block':'none';
            this.preferencias.style.display = newState;
        };

        this.btnGuardar.onclick = (e) => {
            let sistema = this.form['sistema'].value;
            let bg = this.form['background'].value;
            document.cookie = 'sistema='+sistema;
            document.cookie = 'bg='+bg;
            alert("Configuración Guardada");
            this.ocultar();
        }
    }

    guardar() {

    }

}