import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import {
    localStorageGet,
    localStorageSet,
} from "../../../js/tools/localstorage";
import { validacionesApellido } from "../../validaciones";
import Loading from "../../controls/Util/Loading";
import { HomeContext } from "../context/HomeContext";

const Formulario = () => {
    const { register, handleSubmit, formState, setError, trigger } = useForm({
        mode: "onChange",
        defaultValues: {
            nombre: "Hola",
            apellido: "x",
            personaje: "Walter White"
        }
    });

    const {personajes} = useContext(HomeContext);

    const { isDirty, isValid, errors } = formState;

    const submit = (data) => {
        const usuario = data;

        let usuarios = localStorageGet("data") ?? [];
        usuarios = [...usuarios, usuario];

        localStorageSet("data", usuarios);
    };

    return (
        <div className="d-flex justify-content-center">
            <div>
                <h1>Hola mundo</h1> <Loading />
                <form name="xd" onSubmit={handleSubmit(submit)}>
                    <div className="row container ">
                        <div className="col-6 form-group">
                            <label htmlFor="nombre" className="form-label">
                                Nombre
                            </label>
                            <input
                                type="text"
                                id="nombre"
                                className="form-control"
                                {...register("nombre", {
                                    required: "Este campo es requerido",
                                    maxLength: {
                                        value: 5,
                                        message: "Largo máximo permitido es de 5",
                                    },
                                })}
                            />
                            <label className="text-red">{errors.nombre?.message}</label>
                        </div>
                        <div className="col-6 form-group">
                            <label htmlFor="apellido" className="form-label">
                                Apellido
                            </label>
                            <input
                                type="text"
                                id="apellido"
                                className="form-control"
                                {...register("apellido", validacionesApellido)}
                            />
                            <label className="text-red">{errors.apellido?.message}</label>
                        </div>
                        <div className="col-6 form-group">
                            <label htmlFor="personaje" className="form-label">
                                Personaje favorito
                            </label>
                            <select
                                id="personaje"
                                className="form-control"
                                disabled={!!!personajes}
                                {...register("personaje", {
                                    required: { message: "Cuál es el personaje favorito ah?" },
                                })}
                            >
                                {!!!personajes ? <> <option hidden={true}>Cargando... </option></>
                                    :
                                    <>
                                        <option hidden={true}>--Seleccione--</option>
                                        {personajes.map(x => <option key={x.char_id} value={x.name}>{x.name}</option>)}
                                    </>
                                }

                            </select>
                            <label className="text-red">{errors.personaje?.message}</label>
                        </div>
                    </div>
                    <div className="col-12">
                        <br />
                        <button
                            className="btn btn-primary"
                            disabled={!isDirty || !isValid}
                            type="submit"
                        >
                            Guardar
                        </button>
                    </div>
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => setError("apellido", { message: "Hola xd" })}
                    >
                        {" "}
                        Error
                    </button>
                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => trigger()}
                    >
                        {" "}
                        Trigger
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Formulario;
