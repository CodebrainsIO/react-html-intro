import React from 'react'

const Profile = (props: any) => {
    return (
        <div>
            <p>Name: {props.student.name}</p>
            <p>Age: {props.student.age}</p>
            <p>Year in School: {props.student.grade}</p>
            <p>Course in Progress</p>
            <ul>{props.student.courses.map((course: any) => 
                <li>{course}</li>
            )
            }</ul>
        </div>
    )
}

export default Profile
