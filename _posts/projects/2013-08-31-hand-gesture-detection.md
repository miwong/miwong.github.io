---
layout: article
title: "Hand Gesture Detection"
date: 2013-08-31T16:19:16-04:00
categories: projects
excerpt: "Framework allowing hand gestures to be used as input for applications"
tags: []
permalink: /projects/hand-gesture-detection
---

This was an internship project while working at Apple Inc.  Using the OpenCV library, hand gestures could be detected using the computer's webcam and interpreted as input for an application.  This framework was integrated into PhotoBooth to allow the user to take pictures and manipulate the layout using a variety of hand positions and gestures.

Although the aim was to use the webcam as the input for the hand gesture detection, it was found that this was too imprecise and depended too heavily on the environment (in particular, the lighting).  If an IR sensor was used in addition to the webcam, the detection could be more accurate.  Nevertheless, the simple gestures implemented for the PhotoBooth integration worked well enough to control the application reliably.

