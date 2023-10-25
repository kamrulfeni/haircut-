// "use client";
// import Form from "@/components/Forms/Form";
// import FormInput from "@/components/Forms/FormInput";
// import { useUserLoginMutation } from "@/redux/api/authApi";
// import { storeUserInfo } from "@/services/auth.service";
// import { Button, Col, message, Row } from "antd";
// //import { Metadata } from "next";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { SubmitHandler } from "react-hook-form";
// import loginImage from "../../assets/login.png";

// type FormValues = {
//   id: string;
//   password: string;
// };

// const LoginPage = () => {
//   const [userLogin] = useUserLoginMutation();

//   //console.log(isLoggedIn());
//   const router = useRouter();
//   const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
//     try {
//       const res = await userLogin({ ...data }).unwrap();
//       console.log(res);
//       if (res?.accessToken) {
//         router.push("/profile");
//         message.success("User logged in successfully!");
//       }
//       storeUserInfo({ accessToken: res?.accessToken });
//       //console.log(res);
//     } catch (err: any) {
//       console.error(err.message);
//     }
//   };

//   return (
//     <Row
//       justify="center"
//       align="middle"
//       style={{
//         minHeight: "100vh",
//       }}
//     >
//       <Col sm={12} md={16} lg={10}>
//         <Image src={loginImage} width={500} alt="login image" />
//       </Col>
//       <Col sm={12} md={8} lg={8}>
//         <h1
//           style={{
//             margin: "15px 0px ",
//             fontStyle:'italic'
//           }}
//         >
//           First login your account
//         </h1>
//         <div>
//           <Form submitHandler={onSubmit}>
//             <div
//               style={{
//                 margin: "15px 0px ",
//               }}
//             >
//               <h3
//                 style={{
//                   margin: "5px 0px ",
//                   color: "blue",
//                 }}
//               >
//                 User Id
//               </h3>

//               <FormInput name="id" type="text" size="large" label="" />
//             </div>
//             <div
//               style={{
//                 margin: "15px 0px ",
//               }}
//             >
//               <h3
//                 style={{
//                   margin: "5px 0px ",
//                   color: "blue",
                  
//                 }}
//               >
//                 User password
//               </h3>
//               <FormInput
//                 name="password"
//                 type="password"
//                 size="large"
//                 label=""
//               />
//             </div>
//             <Button type="primary" htmlType="submit">
//               Login
//             </Button>
//           </Form>
//         </div>
//       </Col>
//     </Row>
//   );
// };

// export default LoginPage;
