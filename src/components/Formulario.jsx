import React from "react";
import { useForm } from "react-hook-form";
import { validacionesApellido } from "./validaciones";

const Formulario = () => {
    const { register, handleSubmit, getValues, formState, setError, trigger } =
        useForm({ mode: "onChange" });

    const { isDirty, isValid, errors } = formState;

    const submit = (data) => {
        console.log(data);
        console.log(getValues("persona.nombre"));
    };
    return (
        <div className="d-flex justify-content-center">
            <div>
                <h1>Hola mundo</h1>
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
                                {...register("persona.nombre", {
                                    required: "Este campo es requerido",
                                    maxLength: {
                                        value: 5,
                                        message: "Largo máximo permitido es de 5",
                                    },
                                })}
                            />
                            <label className="text-red">
                                {errors.persona?.nombre?.message}
                            </label>
                        </div>
                        <div className="col-6 form-group">
                            <label htmlFor="apellido" className="form-label">
                                Apellido
                            </label>
                            <input
                                type="text"
                                id="apellido"
                                className="form-control"
                                {...register("persona.apellido", validacionesApellido)}
                            />
                            <label className="text-red">
                                {errors.persona?.apellido?.message}
                            </label>
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
                        onClick={() => setError("persona.apellido", { message: "Hola xd" })}
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
