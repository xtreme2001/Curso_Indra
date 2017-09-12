//File: lib/sample.js

module "sample" { 
    
    export hello = (nombre) => {
        return "Hola " + nombre;
    }
        
}