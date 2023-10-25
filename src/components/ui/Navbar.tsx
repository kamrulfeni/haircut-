import React, { useState } from "react";
import type { DrawerProps, RadioChangeEvent } from "antd";
import { Button, Drawer, Radio, Space } from "antd";
import DrawerLargePage from "./drawer/drawer";

const NavbarPage= () => {
  const [open, setOpen] = useState(false);
  const [brand, setBrand] = useState("");
  //const [open, setOpen] = useState(false);

  console.log(brand)
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("left");
 

  const showDrawer = (brand :string) => {
    setOpen(true);
    setBrand(brand)
  };


  const onClose = () => {
    setOpen(false);
  };

  const onChange = (e: RadioChangeEvent) => {
    setPlacement(e.target.value);
  };

  return (
    <>
      <div
        style={{
          marginLeft: "400px",
        }}
      >
        <Space
          style={{
            background: "white-grey",
            width: "100%",
            height: "100px",
          }}
        >
          <Radio.Group value={placement} onChange={onChange}></Radio.Group>
          <Button type="primary" onClick={() => showDrawer("shop")}>
            shop
          </Button>
          <Button type="primary" onClick={() => showDrawer("brand")}>
            brands
          </Button>
          <Button type="primary" onClick={() => showDrawer("cosmetics")}>
            cosmetics
          </Button>
        </Space>
        <div>
          {brand === "shop" && (
            <Drawer
              title="Shop"
              placement={placement}
              closable={false}
              onClose={onClose}
              open={open}
              key={placement}
            >
              <DrawerLargePage />
            </Drawer>
          )}
          {brand === "brand" && (
            <Drawer
              title="Brand"
              placement={placement}
              closable={false}
              onClose={onClose}
              open={open}
              key={placement}
            >
              <DrawerLargePage />
            </Drawer>
          )}
          {brand === "cosmetics" && (
            <Drawer
              title="Cosmetics"
              placement={placement}
              closable={false}
              onClose={onClose}
              open={open}
              key={placement}
            >
              <DrawerLargePage />
            </Drawer>
          )}
        </div>
      </div>
    </>
  );
};

export default NavbarPage;
