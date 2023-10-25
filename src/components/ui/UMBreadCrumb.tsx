import { Avatar, Breadcrumb, Dropdown,MenuProps, Button, Row, Space } from "antd";

//import { HomeOutlined } from "@ant-design/icons";
import { UserOutlined } from "@ant-design/icons";

import Link from "next/link";

const UMBreadCrumb = ({
  items,
}: {
  items: {
    label: string;
    link: string;
  }[];
}) => {

const logOut = () => {
  //removeUserInfo(authKey);
  //router.push("/login");
};
const itemsMenu: MenuProps["items"] = [
  {
    key: "0",
    label: (
      <Button onClick={logOut} type="text" danger>
        {" "}
        Logout
      </Button>
    ),
  },
];

  const breadcrumbItems = [
    // {
    //   title: (
    //     <Link
    //       href="/shop"
    //     >
    //       Shop
    //     </Link>
    //   ),
    // },
    // {
    //   title: (
    //     <Link
    //       style={{
    //         color: "red",
    //         background: "white",
    //         width: "2px",
    //       }}
    //       href="/brands"
    //     >
    //       Brands
    //     </Link>
    //   ),
    // },
    // {
    //   title: (
    //     <Link
    //       style={{
    //         color: "red",
    //         background: "white",
    //         width: "2px",
    //       }}
    //       href="/sale"
    //     >
    //       Sale
    //     </Link>
    //   ),
    // },
    // {
    //   title: (
    //     <Link
    //       style={{
    //         color: "red",
    //         background: "white",
    //         width: "2px",
    //       }}
    //       href="/discover"
    //     >
    //       Discover
    //     </Link>
    //   ),
    // },
    // {
    //   title: (
    //     <Link
    //       style={{
    //         color: "red",
    //         background: "white",
    //         width: "2px",
    //       }}
    //       href="/beauty-services-early-black-friday"
    //     >
    //       Beauty Services Early Black Friday
    //     </Link>
    //   ),
    // },
    // {
    //   title: (
    //     <Link
    //       style={{
    //         color: "red",
    //         background: "white",
    //         width: "2px",
    //       }}
    //       href="/early-black"
    //     >
    //       Early Black Friday
    //     </Link>
    //   ),
    // },
    ...items.map((item) => {
      return {
        title: item.link ? (
          <Link
            style={{
              color: "red",
              backgroundColor: "green",
              width: "100px",
              margin: "5px",
              textAlign: "center",
              textDecoration: "none"
            }}
            href={item.link}
          >
            {item.label}
          </Link>
        ) : (
          <span>{item.label}</span>
        ),
      };
    }),
  ];

  return (
    <div>
      <div>
        <Breadcrumb
          style={{
            height: "100px",
            padding: "30px",
          }}
          items={breadcrumbItems}
        ></Breadcrumb>
      </div>
      
    </div>
  );
};

export default UMBreadCrumb;
