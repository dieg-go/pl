import React from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import TextField from "@/components/TextField";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import supabase from "@/lib/supabase";
import { hashPassword } from "@/lib/auth";

export default function SignUpForm() {
  const router = useRouter();

  const validate = Yup.object({
    name: Yup.string().required("Nombre es necesario!"),
    rut: Yup.string()
      .required("Rut es necesario!")
      .matches(/\d{8,9}-[0-9kK]{1}$/, "Rut invalido!"),
    email: Yup.string()
      .email("Email es invalido!")
      .required("Email es requerido"),
    city: Yup.string().required("Ciudad es requerida!"),
    region: Yup.string().required("Region es requerida!"),
    password: Yup.string()
      .min(6, "Contraseña debe ser de al menos 6 caracteres!")
      .required("Contraseña es necesaria!"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Contraseña no coincide!")
      .required("Contraseña es necesaria!"),
    acceptTerms: Yup.bool().oneOf(
      [true],
      "Debes aceptar los terminos y condiciones!"
    ),
  });

  const initialValues = {
    name: "",
    rut: "",
    email: "",
    city: "",
    region: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  };

  async function handleSubmit(values) {
    
    const { data, error } = await supabase.auth.signUp({
      email: values.email,
      password: values.password,
    });
                                           
    console.log(
      "signUp():",
      data.session,
      data.user,
      error
    );

    if (!error) {

      const { data_insert, error_insert } = await supabase
        .from("users")
        .insert([
          {
            name: values.name,
            email: values.email,
            password: await hashPassword(values.password),
            city: values.city,
            region: values.region,
            rut: values.rut,
          },
        ])
        .select();

      if (!error_insert) {
        console.log("Insertado: ", data_insert);
        router.push("/dashboard");
      }
    }
  }

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Registrate Ahora!</h1>
            <p className="py-6">
              Para continuar con la aplicación, por favor ingresa tus datos.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <Formik
              initialValues={initialValues}
              validationSchema={validate}
              onSubmit={async (values) => {
                await handleSubmit(values);
              }}
            >
              {(formik) => (
                <div>
                  <Form className="card-body">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Nombre</span>
                      </label>
                      <TextField
                        className="input input-bordered"
                        type="text"
                        name="name"
                        placeholder="Juan Perez"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Correo</span>
                      </label>
                      <TextField
                        className="input input-bordered"
                        type="email"
                        name="email"
                        placeholder="loremipsum@gmail.com"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Rut (sin puntos)</span>
                      </label>
                      <TextField
                        className="input input-bordered"
                        type="text"
                        name="rut"
                        placeholder="12.345.678-9"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Ciudad</span>
                      </label>
                      <TextField
                        className="input input-bordered"
                        type="text"
                        name="city"
                        placeholder="La Cruz"
                      />
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Region</span>
                      </label>
                      <Field
                        as="select"
                        label="region"
                        name="region"
                        placeholder="Selecciona una region"
                        className="select select-bordered"
                      >
                        <option disabled value="">
                          Selecciona una region
                        </option>
                        <option value="Arica y Parinacota">
                          Arica y Parinacota
                        </option>
                        <option value="Tarapacá">Tarapacá</option>
                        <option value="Antofagasta">Antofagasta</option>
                        <option value="Atacama">Atacama</option>
                        <option value="Coquimbo">Coquimbo</option>
                        <option value="Valparaíso">Valparaíso</option>
                        <option value="Metropolitana">Metropolitana</option>
                        <option value="O'Higgins">O'Higgins</option>
                        <option value="Maule">Maule</option>
                        <option value="Ñuble">Ñuble</option>
                        <option value="Biobío">Biobío</option>
                        <option value="Araucanía">Araucanía</option>
                        <option value="Los Ríos">Los Ríos</option>
                        <option value="Los Lagos">Los Lagos</option>
                        <option value="Aysén">Aysén</option>
                        <option value="Magallanes">Magallanes</option>
                      </Field>
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Contraseña</span>
                      </label>
                      <TextField
                        className="input input-bordered"
                        type="password"
                        name="password"
                        placeholder="******"
                      />
                    </div>

                    <div className="mb-2">
                      <label htmlFor="confirmPassword">
                        Confirma tu contraseña
                      </label>
                      <input
                        id="confirmPassword"
                        className={`form-control shadow-none input input-bordered ${
                          formik.touched.confirmPassword &&
                          formik.errors.confirmPassword &&
                          "is-invalid"
                        }`}
                        type="password"
                        name="confirmPassword"
                        placeholder="******"
                        {...formik.getFieldProps("confirmPassword")}
                      />
                      <ErrorMessage
                        component="div"
                        name="confirmPassword"
                        className="error"
                      />
                    </div>

                    <div className="form-control">
                      <label className="label cursor-pointer">
                        <span className="label-text">
                          Aceptas los terminos y condiciones
                        </span>
                        <Field
                          type="checkbox"
                          name="acceptTerms"
                          className="checkbox"
                        />
                      </label>
                    </div>

                    <button className="btn btn-dark m-3" type="submit">
                      Register
                    </button>
                    <button className="btn btn-primary m-3" type="reset">
                      Reset
                    </button>
                  </Form>
                </div>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}
