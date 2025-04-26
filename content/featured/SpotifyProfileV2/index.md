---
date: '2024-02-20'
title: '3-D Scene Reconstruction with SfM & Neural Rendering'
cover: './course-card.png'
github: 'https://github.com/rigved-sanku/NeRF-Implementation-for-Efficient-3D-Scene-Reconstruction'
external: 'https://drive.google.com/file/d/191Jkv1Q44M3D3gIVyh1QFXB0p5yd0nXj/view'

tech:
  - COLMAP / SfM
  - NeRF
  - Open3D
  - PyTorch
---

I built a pipeline that turns a set of photos into a full 3-D model you can view from any angle. First, I used **Structure-from-Motion** in COLMAP to find camera poses and a sparse point cloud. Next, I densified the geometry with Open3D and fed the results into a **Neural Radiance Field (NeRF)**, which learns how light flows through the scene and produces smooth, realistic renderings.

The project taught me feature matching, bundle adjustment, point-cloud processing, and the basics of neural rendering while giving me plenty of practice with PyTorch and 3-D visualisation tools.
