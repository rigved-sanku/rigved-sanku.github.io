---
date: '2024-03-01'
title: 'VIO for Drones'
cover: './demo.png'
#github: 'https://github.com/bchiang7/spotify-profile'
external: 'https://drive.google.com/file/d/1oHou6dvBSZXjW5Z-boLfd3GG388aZdY_/view'
tech:
  - MSCKF
  - CNN / ResNet
  - LSTM + Attention
  - PyTorch
  - ROS
  - EuRoC Dataset
---

A hybrid **SLAM-based Visual-Inertial Odometry (VIO)** pipeline for autonomous UAVs that fuses classical and deep-learning methods. The front-end employs the **Multi-State Constraint Kalman Filter (MSCKF)** for geometrically consistent state updates, while a suite of CNN, ResNet, and LSTM-with-attention networks refines motion estimates from raw images and IMU streams. On the EuRoC benchmark, the system delivers improvement in absolute-trajectory error over baseline VO/IO models.
