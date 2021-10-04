import { useEffect, useState } from "react";
const useLoadCourse =()=>{
    const [courses, setCourse] = useState();
    useEffect(()=>{
        fetch('./service.json')
        .then(res=>res.json())
        .then(data=>setCourse(data))
    },[])
    console.log(courses)
    return [courses]
}
export default useLoadCourse