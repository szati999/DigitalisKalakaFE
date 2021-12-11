import React, { useState, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import styles from "./StudentRegistration.module.css";
import SUBJECTS_ARRAY from "../constants/subjects";
import classes from "./MentorRegister.module.css";

const StudentRegistration = () => {
  const [selectedType, setSelectedType] = useState("Diák");
  const [selectedSubject, setselectedSubject] = useState("");
  const [error, setError] = useState("");
  const teacherFirstNameRef = useRef("");
  const teacherLastNameRef = useRef("");
  const teacherPhoneNumberRef = useRef("");
  const teacherEmailRef = useRef("");
  const parentFirstNameRef = useRef("");
  const parentLastNameRef = useRef("");
  const parentEmailRef = useRef("");
  const parentPhoneNumberRef = useRef("");
  const studentFirstNameRef = useRef("");
  const studentLastNameRef = useRef("");
  const studentAgeRef = useRef("");
  const studentEmailRef = useRef("");
  const studentPhoneNumberRef = useRef("");
  const studentSchoolRef = useRef("");
  const studentClassRef = useRef("");
  const studentMotivRef = useRef("");

  const handleStudentRegister = async (event) => {
    event.preventDefault();
    var teacherFName = "";
    var teacherLName = "";
    var teacherPhoneNumber = "";
    var teacherEmail = "";

    const parentFirstName = parentFirstNameRef.current.value;
    const parentLastName = parentLastNameRef.current.value;
    const parentEmail = parentEmailRef.current.value;
    const parentPhoneNumber = parentPhoneNumberRef.current.value;
    const studentFirstName = studentFirstNameRef.current.value;
    const studentLastName = studentLastNameRef.current.value;
    const studentAge = studentAgeRef.current.value;
    const studentEmail = studentEmailRef.current.value;
    const studentPhoneNumber = studentPhoneNumberRef.current.value;
    const studentSchool = studentSchoolRef.current.value;
    const studentClass = studentClassRef.current.value;
    const studenMotiv = studentMotivRef.current.value;

    if (
      studentFirstName.length === 0 ||
      studentLastName === 0 ||
      studenMotiv.length === 0 ||
      studentClass.lenth === 0
    ) {
      setError("Töltsd ki a mezőket!");
    } else {
      let data = {
        parentName: parentFirstName + " " + parentLastName,
        parentEmail: parentEmail,
        parentPhoneNumber: parentPhoneNumber,
        studentName: studentFirstName + " " + studentLastName,
        studentAge: studentAge,
        studentEmail: studentEmail,
        studentPhone: studentPhoneNumber ? studentPhoneNumber : "",
        studentSchool: studentSchool,
        studentClass: studentClass,
        studentMotivation: studenMotiv,
        subject: selectedSubject,
        pending: false,
      };
      if (selectedType === "teacher") {
        teacherFName = teacherFirstNameRef.current.value;
        teacherLName = teacherLastNameRef.current.value;
        teacherPhoneNumber = teacherPhoneNumber ? teacherPhoneNumber : "";
        teacherEmail = teacherEmailRef.current.value;
        data = {
          ...data,
          techerName: teacherFName + " " + teacherLName,
          teacherPhoneNumber: teacherPhoneNumber,
          teacherEmail: teacherEmail,
        };
      }
      try {
        const resp = await fetch("http://localhost:3000/register_student", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        if (resp.status === 200 || resp.status === 201) {
          console.log("Student registered successfully!", resp);
          let respData = await resp.json();
          localStorage.setItem("studentId", respData);
          localStorage.setItem("studentSubject", selectedSubject);
        } else {
          console.log("Error during register (from server) ", resp);
        }
        // navigate("/");
      } catch (error) {
        console.log("Error during register: ", error);
      }
    }
  };
  console.log(selectedSubject);
  return (
    <div className={styles.student_reg}>
      <div className={styles.head_title}>Tanulnek</div>
      <div>
        <h1 className={styles.h1}>Kérjük töltsd ki az alábbi űrlapot</h1>
        <h3 className={styles.h3}>
          Regisztrációdhoz szükséges megadnod az alábbi adatokat, majd azok
          egyéni elbírálása után beléphetsz a felületre.
        </h3>
      </div>
      <Form>
        <div className={styles.header}>
          <h2 className={styles.h2}>Az űrlap kitöltője</h2>
          <div className={styles.type_select_holder}>
            <select
              className={styles.select}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option defaultChecked value="student">
                Diák
              </option>
              <option value="teacher">Tanár</option>
              <option value="parent">Szülő</option>
            </select>
          </div>
          <hr className={styles.line} />
        </div>
        {selectedType === "teacher" && (
          <div className={styles.teacher_data}>
            <h2 className={styles.h2}>Tanár adatai</h2>
            <div className={styles.inputs}>
              <Form.Group className={styles.input_holder}>
                <Form.Label className={classes.label}>
                  Tanár vezetékneve
                </Form.Label>
                <Form.Control
                  className={styles.input_field}
                  type="text"
                  ref={teacherFirstNameRef}
                  required
                />
              </Form.Group>
              <Form.Group className={styles.input_holder}>
                <Form.Label className={classes.label}>
                  Tanár keresztneve
                </Form.Label>
                <Form.Control
                  className={styles.input_field}
                  type="text"
                  ref={teacherLastNameRef}
                  required
                />
              </Form.Group>
              <Form.Group className={styles.input_holder}>
                <Form.Label className={classes.label}>
                  Tanár email címe
                </Form.Label>
                <Form.Control
                  className={styles.input_field}
                  type="email"
                  ref={teacherPhoneNumberRef}
                  required
                />
              </Form.Group>
              <Form.Group className={styles.input_holder}>
                <Form.Label className={classes.label}>
                  Tanár telefonszáma (opcionális)
                </Form.Label>
                <Form.Control
                  className={styles.input_field}
                  type="text"
                  ref={teacherEmailRef}
                />
              </Form.Group>
              <hr className={styles.line} />
            </div>
          </div>
        )}
        <div className={styles.items}>
          <h2 className={styles.h2}>Szülő adatai</h2>
          <div className={styles.inputs}>
            <Form.Group className={styles.input_holder}>
              <Form.Label className={classes.label}>
                Szülő vezetékneve
              </Form.Label>
              <Form.Control
                className={styles.input_field}
                type="text"
                ref={parentFirstNameRef}
                required
              />
            </Form.Group>
            <Form.Group className={styles.input_holder}>
              <Form.Label className={classes.label}>
                Szülő keresztneve
              </Form.Label>
              <Form.Control
                className={styles.input_field}
                type="text"
                ref={parentLastNameRef}
                required
              />
            </Form.Group>
            <Form.Group className={styles.input_holder}>
              <Form.Label className={classes.label}>
                Szülő email címe
              </Form.Label>
              <Form.Control
                className={styles.input_field}
                type="email"
                ref={parentEmailRef}
                required
              />
            </Form.Group>
            <Form.Group className={styles.input_holder}>
              <Form.Label className={classes.label}>
                Szülő telefonszáma (opcionális)
              </Form.Label>
              <Form.Control
                className={styles.input_field}
                type="text"
                ref={parentPhoneNumberRef}
              />
            </Form.Group>
          </div>
        </div>
        <div className={styles.personal_data}>
          <h2 className={styles.h2}>Diák személyes adatai</h2>
          <div className={styles.inputs_three}>
            <Form.Group className={styles.input_holder}>
              <Form.Label className={classes.label}>Vezetéknév</Form.Label>
              <Form.Control
                className={styles.input_field}
                type="text"
                ref={studentFirstNameRef}
                required
              />
            </Form.Group>
            <Form.Group className={styles.input_holder}>
              <Form.Label className={classes.label}>Keresztnév</Form.Label>
              <Form.Control
                className={styles.input_field}
                type="text"
                ref={studentLastNameRef}
                required
              />
            </Form.Group>
            <Form.Group className={styles.input_holder}>
              <Form.Label className={classes.label}>Életkor</Form.Label>
              <Form.Control
                className={styles.input_field}
                type="number"
                ref={studentAgeRef}
                required
              />
            </Form.Group>
          </div>
          <div>
            <h2 className={styles.h2}>Diák elérhetőségi adatai</h2>
            <div className={styles.inputs}>
              <Form.Group className={styles.input_holder}>
                <Form.Label className={classes.label}>Email cím</Form.Label>
                <Form.Control
                  className={styles.input_field}
                  type="email"
                  ref={studentEmailRef}
                  required
                  placeholder=""
                />
              </Form.Group>
              <Form.Group className={styles.input_holder}>
                <Form.Label className={classes.label}>Telefonszám</Form.Label>
                <Form.Control
                  className={styles.input_field}
                  type="text"
                  ref={studentPhoneNumberRef}
                  required
                  placeholder=""
                />
              </Form.Group>
            </div>
          </div>
          <div>
            <h2 className={styles.h2}>Oktatási adatok</h2>
            <div className={styles.inputs}>
              <Form.Group className={styles.input_holder}>
                <Form.Label className={classes.label}>Iskola</Form.Label>
                <Form.Control
                  className={styles.input_field}
                  type="text"
                  ref={studentSchoolRef}
                  required
                />
              </Form.Group>
              <Form.Group className={styles.input_holder}>
                <Form.Label className={classes.label}>
                  Osztály (1-12)
                </Form.Label>
                <Form.Control
                  className={styles.input_field}
                  type="number"
                  ref={studentClassRef}
                  min={1}
                  max={12}
                  required
                />
              </Form.Group>
            </div>
          </div>
          <div>
            <h2 className={styles.h2}>Leírás</h2>

            <div className={styles.select_motiv}>
              <div className={styles.class_select}>
                <Form.Label className={classes.label}>
                  Korrepetálás kategória
                </Form.Label>
                <select
                  className={styles.select}
                  onChange={(e) => setselectedSubject(e.target.value)}
                >
                  <option>Kérjük válaszd ki a kategóriát</option>
                  {SUBJECTS_ARRAY.map((elem, index) => (
                    <option key={index} value={elem}>{elem}</option>
                  ))}
                </select>
              </div>
              <div className={styles.text_area_holder}>
                <Form.Label className={classes.label}>
                  Motivációs levél
                </Form.Label>
                <Form.Control
                  className={styles.input_field}
                  as="textarea"
                  aria-label="With textarea"
                  ref={studentMotivRef}
                  required
                />
                <p className={classes.descText}>
                  Miért szeretnél önkéntes mentor lenni? Miért gondolod, hogy
                  megfelelő vagy ehhez a feladathoz?
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.button_holder}>
            {error &&  <p className={styles.error}>{error}</p>}
          <Button
            className={styles.button}
            onClick={(event) => {
              handleStudentRegister(event);
            }}
          >
            Űrlap beküldése
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default StudentRegistration;
