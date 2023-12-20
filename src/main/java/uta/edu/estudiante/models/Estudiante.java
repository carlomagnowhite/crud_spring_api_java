package uta.edu.estudiante.models;

import jakarta.persistence.*;

@Entity
@Table(name="estudiante")
public class Estudiante {


    @Id
    private String CED_EST;
    private String NOM_EST;
    private String APE_EST;
    private String DIR_EST;
    private String TEL_EST;

    public Estudiante() {

    }

    public Estudiante(String NOM_EST, String APE_EST, String DIR_EST, String TEL_EST) {
        this.NOM_EST = NOM_EST;
        this.APE_EST = APE_EST;
        this.DIR_EST = DIR_EST;
        this.TEL_EST = TEL_EST;
    }

    public String getCED_EST() {
        return CED_EST;
    }

    public void setCED_EST(String CED_EST) {
        this.CED_EST = CED_EST;
    }

    public String getNOM_EST() {
        return NOM_EST;
    }

    public void setNOM_EST(String NOM_EST) {
        this.NOM_EST = NOM_EST;
    }

    public String getAPE_EST() {
        return APE_EST;
    }

    public void setAPE_EST(String APE_EST) {
        this.APE_EST = APE_EST;
    }

    public String getDIR_EST() {
        return DIR_EST;
    }

    public void setDIR_EST(String DIR_EST) {
        this.DIR_EST = DIR_EST;
    }

    public String getTEL_EST() {
        return TEL_EST;
    }

    public void setTEL_EST(String TEL_EST) {
        this.TEL_EST = TEL_EST;
    }
}
