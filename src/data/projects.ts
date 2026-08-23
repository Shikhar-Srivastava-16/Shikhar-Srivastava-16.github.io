export type Project = {
  slug: string;
  name: string;
  description: string;
  image: string;
  tags: string[];
  href?: string;
};

// Replace `image` with real photos in /public/images/projects/.
export const projects: Project[] = [
  {
    slug: "autonomous-cart",
    name: "Autonomous Delivery Cart",
    description:
      "A small four-wheeled robot for indoor delivery, built around ROS2 for navigation and a custom PCB for motor control. Handled localisation with a fused IMU + wheel-odometry filter and mapped corridors with a 2D lidar.",
    image: "/images/projects/placeholder-1.svg",
    tags: ["Robotics", "ROS2", "Embedded"],
  },
  {
    slug: "structural-sim",
    name: "Structural Load Simulator",
    description:
      "A finite-element tool for quickly checking beam deflection and stress concentrations on 3D-printed brackets before committing to a print. Exports a heat-mapped mesh you can rotate and inspect in the browser.",
    image: "/images/projects/placeholder-2.svg",
    tags: ["FEA", "WebGL", "Python"],
  },
  {
    slug: "field-camera-rig",
    name: "Field Camera Stabiliser",
    description:
      "A lightweight, hand-built gimbal for long lens wildlife photography in cold environments — brushless motors, a 3D-printed housing, and firmware tuned to survive being dropped in snow more than once.",
    image: "/images/projects/placeholder-3.svg",
    tags: ["Mechatronics", "3D Printing", "Firmware"],
  },
];
