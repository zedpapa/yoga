const initialAsanaData = [
  {
    name: "Easy Pose (Sukhasana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/beginner-yoga-poses-Sukhasana.jpg",
    bodyParts: "Back, Knees, Ankles",
    connectedOrgans: "Brain",
    traditions: "Beginner Friendly"
  },
  {
    name: "Staff Pose (Dandasana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/beginner-yoga-poses-Dandasana.jpg",
    bodyParts: "Back, Shoulders, Chest",
    connectedOrgans: "",
    traditions: "Beginner Friendly"
  },
  {
    name: "Cat Pose (Marjaryasana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/beginner-yoga-poses-Marjaryasana.jpg",
    bodyParts: "Back, Neck, Torso, Spine",
    connectedOrgans: "Abdominal Organs",
    traditions: "Beginner Friendly"
  },
  {
    name: "Sphinx Pose",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/beginner-yoga-poses-Sphinx-Pose.jpg",
    bodyParts: "Spine, Glutes, Chest, Shoulders, Abdomen",
    connectedOrgans: "Abdominal Organs",
    traditions: "Beginner Friendly"
  },
  {
    name: "Warrior 1 Pose (Virabhadrasana 1)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/beginner-yoga-poses-Virabhadrasana-1.jpg",
    bodyParts: "Shoulders, Arms, Back, Thighs, Calves, Ankles",
    connectedOrgans: "",
    traditions: "Hatha Yoga"
  },
  {
    name: "Gate Pose (Parighasana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/beginner-yoga-poses-Parighasana.jpg",
    bodyParts: "Hamstrings, Spine, Torso, Shoulders",
    connectedOrgans: "Abdominal Organs",
    traditions: "Hatha Yoga"
  },
  {
    name: "Extended Side Angle Pose (Utthita Parsvakonasana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/sara-crave-Utthita-Parsvakonasana.jpg",
    bodyParts: "Legs, Knees, Ankles, Groins, Spine, Lungs, Shoulders",
    connectedOrgans: "Abdominal Organs",
    traditions: "Hatha Yoga"
  },
  {
    name: "Wide Legged Forward Bend (Prasarita Padottanasana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/sara-crave-Prasarita-Padottanasana.jpg",
    bodyParts: "Inner legs, Back legs, Spine",
    connectedOrgans: "Abdominal Organs",
    traditions: "Hatha Yoga"
  },
  {
    name: "Wide-Angle Seated Forward Bend (Upavistha Konasana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/Upavistha-Konasana.jpg",
    bodyParts: "Back of legs, Inside of legs, Groins, Spine",
    connectedOrgans: "Kidneys, Abdominal Muscles",
    traditions: "Hatha Yoga"
  },
  {
    name: "Reclining Bound Angle Pose (Supta Baddha Konasana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/supta-baddha-konasana.jpg",
    bodyParts: "Inner thighs, Knees, Groin",
    connectedOrgans: "Ovaries, Bladder, Kidneys",
    traditions: "Restorative Yoga"
  },
  {
    name: "Hero Pose (Virasana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2017/11/yoga-pose-Hero-Pose-%E2%80%93-Virasana.jpg",
    bodyParts: "Ankles, Knees, Thighs, Arches",
    connectedOrgans: "",
    traditions: "Hatha Yoga"
  },
  {
    name: "Chair Pose (Utkatasana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/beginner-yoga-poses-Utkatasa.jpg",
    bodyParts: "Ankles, Calves, Thighs, Spine, Chest, Shoulders",
    connectedOrgans: "Heart, Diaphragm, Abdominal Organs",
    traditions: "Hatha Yoga"
  },
  {
    name: "Mountain Pose (Tadasana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/beginner-yoga-poses-Tadasana.jpg",
    bodyParts: "Ankles, Knees, Thighs, Buttocks, Abs",
    connectedOrgans: "",
    traditions: "Hatha Yoga"
  },
  {
    name: "Bharadvaja's Twist (Bharadvajasana 1)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/beginner-yoga-poses-Bharadvajasana-I-.jpg",
    bodyParts: "Hips, Shoulders, Spine, Lower back",
    connectedOrgans: "Abdominal Organs",
    traditions: "Hatha Yoga"
  },
  {
    name: "Salutation Seal (Anjali Mudra)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/yoga-poses-Anjali-Mudra.jpg",
    bodyParts: "Wrists, Fingers",
    connectedOrgans: "Brain",
    traditions: "Meditative"
  },
  {
    name: "Corpse Pose (Savasana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/beginner-yoga-pose-Savasana-.jpg",
    bodyParts: "Full Body Relaxation",
    connectedOrgans: "Brain",
    traditions: "Restorative Yoga"
  },
  {
    name: "Standing Forward Bend (Uttanasana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/Uttanasana.jpg",
    bodyParts: "Hips, Calves, Hamstrings, Knees, Thighs",
    connectedOrgans: "Kidneys, Liver",
    traditions: "Hatha Yoga"
  },
  {
    name: "Seated Forward Bend (Paschimottanasana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/beginner-yoga-pose-Paschimottanasana-.jpg",
    bodyParts: "Spine, Shoulders, Hamstrings",
    connectedOrgans: "Liver, Kidneys, Ovaries, Uterus",
    traditions: "Hatha Yoga"
  },
  {
    name: "Child's Pose (Balasana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/yoga-pose-Balasana.jpg",
    bodyParts: "Ankles, Thighs, Hips, Neck, Back",
    connectedOrgans: "Brain",
    traditions: "Restorative Yoga"
  },
  {
    name: "Cobra Pose (Bhujangasana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/yoga-pose-Bhujagasana.jpg",
    bodyParts: "Spine, Buttocks, Chest, Lungs, Shoulders, Abdomen",
    connectedOrgans: "Abdominal Organs, Heart",
    traditions: "Hatha Yoga"
  },
  {
    name: "Plank Pose",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/yoga-poses-Plank-Pose.jpg",
    bodyParts: "Abdomen, Spine, Wrists, Arms",
    connectedOrgans: "",
    traditions: "Core Strength"
  },
  {
    name: "Happy Baby Pose (Ananda Balasana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/yoga-pose-Ananda-Balasana.jpg",
    bodyParts: "Inner groins, Spine",
    connectedOrgans: "",
    traditions: "Restorative Yoga"
  },
  {
    name: "Low Lunge (Anjaneyasana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/yoga-poses-Anjaneyasana.jpg",
    bodyParts: "Hip flexors, Buttocks, Thighs, Hamstrings",
    connectedOrgans: "",
    traditions: "Hatha Yoga"
  },
  {
    name: "High Lunge (Utthita Ashwa Sanchalanasana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/yoga-pose-Utthita-Ashwa-Sanchalanasana.jpg",
    bodyParts: "Hip flexors, Legs, Core",
    connectedOrgans: "",
    traditions: "Hatha Yoga"
  },
  {
    name: "Standing Half Forward Bend (Ardha Uttanasana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/beginner-yoga-poses-Ardha-Uttanasana.jpg",
    bodyParts: "Front torso, Back, Hamstrings",
    connectedOrgans: "Abdominal Organs",
    traditions: "Hatha Yoga"
  },
  {
    name: "Garland Pose (Malasana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/beginner-yoga-poses-Malasana-.jpg",
    bodyParts: "Back torso, Groins, Ankles, Belly",
    connectedOrgans: "",
    traditions: "Hatha Yoga"
  },
  {
    name: "Extended Puppy Pose (Uttana Shishosana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/beginner-yoga-poses-Uttana-Shishosana.jpg",
    bodyParts: "Shoulders, Spine, Upper back",
    connectedOrgans: "",
    traditions: "Hatha Yoga"
  },
  {
    name: "Lion Pose (Simhasana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/beginner-yoga-poses-Simhasana.jpg",
    bodyParts: "Face, Throat, Chest",
    connectedOrgans: "",
    traditions: "Hatha Yoga"
  },
  {
    name: "Intense Side Stretch (Parsvottanasana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/beginner-yoga-poses-Parsvottanasana.jpg",
    bodyParts: "Legs, Hamstrings, Hips, Wrists, Shoulders, Spine",
    connectedOrgans: "Abdominal Organs",
    traditions: "Hatha Yoga"
  },
  {
    name: "Locust Pose (Salabhasana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/beginner-yoga-poses-Salabhasana.jpg",
    bodyParts: "Spine, Buttocks, Arms, Legs, Thighs, Belly, Chest, Shoulders",
    connectedOrgans: "Abdominal Organs",
    traditions: "Hatha Yoga"
  },
  {
    name: "Heron Pose (Krounchasana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/beginner-yoga-poses-Krounchasana-.jpg",
    bodyParts: "Hamstrings",
    connectedOrgans: "Heart, Abdominal Organs",
    traditions: "Hatha Yoga"
  },
  {
    name: "Fish Pose (Matsyasana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/yoga-poses-Matsyasana.jpg",
    bodyParts: "Hip flexors, Intercostal muscles, Belly, Neck, Upper back",
    connectedOrgans: "",
    traditions: "Hatha Yoga"
  },
  {
    name: "Legs-Up-The-Wall Pose (Viparita Karani)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/beginner-yoga-poses-Viparita-Karani.jpg",
    bodyParts: "Back of legs, Front torso, Back of neck",
    connectedOrgans: "",
    traditions: "Restorative Yoga"
  },
  {
    name: "Cow Face Pose (Gomukhasana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2017/11/beginner-yoga-poses-Cow-Face-Pose-%E2%80%93-Gomukhasana-Twisted.jpg",
    bodyParts: "Shoulders, Chest, Triceps, Armpits, Hips, Thighs, Ankles",
    connectedOrgans: "",
    traditions: "Hatha Yoga"
  },
  {
    name: "Warrior II Pose (Virabhadrasana II)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/beginner-yoga-poses-Virabhadrasana-II-.jpg",
    bodyParts: "Legs, Ankles, Groins, Chest, Lungs, Shoulders",
    connectedOrgans: "",
    traditions: "Hatha Yoga"
  },
  {
    name: "Tree Pose (Vrksasana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/yoga-poses-Vrksasana.jpg",
    bodyParts: "Spine, Legs, Groins, Inner thighs, Chest, Shoulders",
    connectedOrgans: "",
    traditions: "Hatha Yoga"
  },
  {
    name: "Downward Facing Dog (Adho Mukha Svanasana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/beginner-yoga-poses-Adho-Mukha-Svanasana.jpg",
    bodyParts: "Arms, Legs, Shoulders, Hamstrings, Calves, Hands, Arches",
    connectedOrgans: "Brain",
    traditions: "Hatha Yoga"
  },
  {
    name: "Half Lord of the Fishes Pose (Ardha Matsyendrasana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/beginner-yoga-poses-Ardha-Matsyendrasana.jpg",
    bodyParts: "Neck, Shoulders, Hips, Spine",
    connectedOrgans: "Liver, Kidneys",
    traditions: "Hatha Yoga"
  },
  {
    name: "Bridge Pose (Setu Bandha Sarvangasana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/yoga-poses-Setu-Bandha-Sarvangasana.jpg",
    bodyParts: "Chest, Neck, Spine",
    connectedOrgans: "Lungs, Thyroid, Abdominal Organs",
    traditions: "Hatha Yoga"
  },
  {
    name: "Four-Limbed Staff Pose (Chaturanga Dandasana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/beginner-yoga-poses-Chaturanga.jpg",
    bodyParts: "Arms, Wrists, Abdomen",
    connectedOrgans: "",
    traditions: "Vinyasa Yoga"
  },
  {
    name: "Pigeon Pose (Adho Mukha Kapotasana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/beginner-yoga-poses-Adho-Mukha-Kapotasana.jpg",
    bodyParts: "Hips, Thighs",
    connectedOrgans: "",
    traditions: "Hatha Yoga"
  },
  {
    name: "Lotus Pose (Padmasana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/beginner-yoga-poses-Padmasana.jpg",
    bodyParts: "Hips, Knees, Ankles",
    connectedOrgans: "Brain",
    traditions: "Meditative"
  },
  {
    name: "Warrior III (Virabhadrasana III)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/beginner-yoga-poses-Virabhadrasana-III.jpg",
    bodyParts: "Legs, Core, Arms, Shoulders",
    connectedOrgans: "",
    traditions: "Hatha Yoga"
  },
  {
    name: "Cow Pose (Bitilasana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/yoga-poses-Bitilasana.jpg",
    bodyParts: "Spine, Neck, Torso",
    connectedOrgans: "",
    traditions: "Hatha Yoga"
  },
  {
    name: "Upward-Facing Dog (Urdhva Mukha Svanasana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/beginner-yoga-poses-Urdhva-Mukha-Svanasana.jpg",
    bodyParts: "Spine, Arms, Wrists, Chest, Shoulders, Abdomen",
    connectedOrgans: "Lungs, Abdominal Organs",
    traditions: "Vinyasa Yoga"
  },
  {
    name: "Shoulder Stand (Salamba Sarvangasana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/beginner-yoga-poses-viparita-karani-1.jpg",
    bodyParts: "Shoulders, Neck, Back",
    connectedOrgans: "Thyroid, Prostate",
    traditions: "Hatha Yoga"
  },
  {
    name: "Butterfly Pose (Baddha Konasana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/yoga-poses-Badhakonasana.jpg",
    bodyParts: "Inner thighs, Groin, Knees",
    connectedOrgans: "Ovaries, Bladder, Kidneys",
    traditions: "Hatha Yoga"
  },
  {
      name: "Triangle Pose (Trikonasana)",
      photoSrc: "https://www.yogajournal.com/wp-content/uploads/2021/11/Triangle-Pose_Andrew-Clark_2400x1350.jpg",
      bodyParts: "Legs, Hips, Groin, Hamstrings, Calves, Shoulders, Chest, Spine",
      connectedOrgans: "Abdominal organs",
      traditions: "Hatha Yoga"
  },
  {
      name: "Camel Pose (Ustrasana)",
      photoSrc: "https://www.yogajournal.com/wp-content/uploads/2021/10/ustrasana-camel-pose-yoy-s2.jpg",
      bodyParts: "Front of body, Ankles, Thighs, Groin, Abdomen, Chest, Throat",
      connectedOrgans: "Abdominal organs",
      traditions: "Hatha Yoga"
  },
  {
      name: "Crow Pose (Bakasana)",
      photoSrc: "https://www.yogajournal.com/wp-content/uploads/2021/11/Crow-Pose_Andrew-Clark_2400x1350.jpg",
      bodyParts: "Arms, Wrists, Core, Upper back",
      connectedOrgans: "",
      traditions: "Arm Balance"
  }
];
