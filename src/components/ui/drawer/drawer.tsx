import React, { useState } from "react";
import { Button, Drawer, Radio, RadioChangeEvent, Space } from "antd";
import type { DrawerProps } from "antd/es/drawer";

const DrawerLargePage = () => {
  const [open, setOpen] = useState(false);
  const [openDrawer, setopenDrawer] = useState("");
  const [size, setSize] = useState<DrawerProps["size"]>();
 const [placement, setPlacement] = useState<DrawerProps["placement"]>("left");
 
  const showLargeDrawer = (openDrawer: string) => {
    setSize("large");
    setOpen(true);
    setopenDrawer(openDrawer);
  };

  const onClose = () => {
    setOpen(false);
  };
   const onChange = (e: RadioChangeEvent) => {
       setPlacement(e.target.value);
     };

  return (
    <div>
      <Space
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Radio.Group value={placement} onChange={onChange}></Radio.Group>

        <Button
          style={{
            width: "100px",
          }}
          type="primary"
          onClick={() => showLargeDrawer("lipstick")}
        >
          lipstick
        </Button>
        <Button
          style={{
            width: "100px",
          }}
          type="primary"
          onClick={() => showLargeDrawer("kjol")}
        >
          kjol
        </Button>
        <Button
          style={{
            width: "100px",
          }}
          type="primary"
          onClick={() => showLargeDrawer("nilpalish")}
        >
          nilpalish
        </Button>
        <Button
          style={{
            width: "100px",
          }}
          type="primary"
          onClick={() => showLargeDrawer("ibrew")}
        >
          ibrew
        </Button>
        <Button
          style={{
            width: "100px",
          }}
          type="primary"
          onClick={() => showLargeDrawer("lotion")}
        >
          lotion
        </Button>
      </Space>
      {openDrawer === "lipstick" && (
        <Drawer
          style={{
            marginLeft: "500px",
          }}
          title={`${size} Drawer`}
          placement="left"
          size={size}
          onClose={onClose}
          open={open}
          extra={
            <Space>
              <Button onClick={onClose}>Cancel</Button>
              <Button type="primary" onClick={onClose}>
                OK
              </Button>
            </Space>
          }
        >
          <p>lipstick...</p>
          <p>lipstick...</p>
          <p>lipstick...</p>
          <p>lipstick...</p>
          <p>lipstick...</p>
        </Drawer>
      )}
      {openDrawer === "kjol" && (
        <Drawer
          style={{
            marginLeft: "500px",
          }}
          title={`${size} Drawer`}
          placement="left"
          size={size}
          onClose={onClose}
          open={open}
          extra={
            <Space>
              <Button onClick={onClose}>Cancel</Button>
              <Button type="primary" onClick={onClose}>
                OK
              </Button>
            </Space>
          }
        >
          <p>kajol .</p>
          <p>kajol .</p>
          <p>kajol .</p>
          <p>kajol .</p>
          <p>kajol .</p>
          <p>kajol .</p>
        </Drawer>
      )}
      {openDrawer === "nilpalish" && (
        <Drawer
          style={{
            marginLeft: "500px",
          }}
          title={`${size} Drawer`}
          placement="left"
          size={size}
          onClose={onClose}
          open={open}
          extra={
            <Space>
              <Button onClick={onClose}>Cancel</Button>
              <Button type="primary" onClick={onClose}>
                OK
              </Button>
            </Space>
          }
        >
          <p>nilpalish...</p>
          <p>nilpalish...</p>
          <p>nilpalish...</p>
          <p>nilpalish...</p>
          <p>nilpalish...</p>
        </Drawer>
      )}
      {openDrawer === "ibrew" && (
        <Drawer
          style={{
            marginLeft: "500px",
          }}
          title={`${size} Drawer`}
          placement="left"
          size={size}
          onClose={onClose}
          open={open}
          extra={
            <Space>
              <Button onClick={onClose}>Cancel</Button>
              <Button type="primary" onClick={onClose}>
                OK
              </Button>
            </Space>
          }
        >
          <p>ibrew...</p>
          <p>ibrew...</p>
          <p>ibrew...</p>
          <p>ibrew...</p>
          <p>ibrew...</p>
          <p>ibrew...</p>
        </Drawer>
      )}
      {openDrawer === "lotion" && (
        <Drawer
          style={{
            marginLeft: "500px",
          }}
          title={`${size} Drawer`}
          placement="left"
          size={size}
          onClose={onClose}
          open={open}
          extra={
            <Space>
              <Button onClick={onClose}>Cancel</Button>
              <Button type="primary" onClick={onClose}>
                OK
              </Button>
            </Space>
          }
        >
          <p>lotion...</p>
          <p>lotion...</p>
          <p>lotion...</p>
          <p>lotion...</p>
          <p>lotion...</p>
          <p>lotion...</p>
        </Drawer>
      )}
    </div>
  );
};

export default DrawerLargePage;
