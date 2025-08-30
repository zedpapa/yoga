const initialAsanaData = [
  // --- Existing 50 Poses (Traditions Updated) ---
  {
    name: "Easy Pose (Sukhasana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/beginner-yoga-poses-Sukhasana.jpg",
    bodyParts: "Back, Knees, Ankles",
    connectedOrgans: "Brain",
    traditions: "Hatha / Restorative"
  },
  {
    name: "Staff Pose (Dandasana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/beginner-yoga-poses-Dandasana.jpg",
    bodyParts: "Back, Shoulders, Chest",
    connectedOrgans: "",
    traditions: "Ashtanga / Hatha"
  },
  {
    name: "Cat Pose (Marjaryasana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/beginner-yoga-poses-Marjaryasana.jpg",
    bodyParts: "Back, Neck, Torso, Spine",
    connectedOrgans: "Abdominal Organs",
    traditions: "Hatha / Vinyasa"
  },
  {
    name: "Sphinx Pose",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/beginner-yoga-poses-Sphinx-Pose.jpg",
    bodyParts: "Spine, Glutes, Chest, Shoulders, Abdomen",
    connectedOrgans: "Abdominal Organs",
    traditions: "Yin / Restorative"
  },
  {
    name: "Warrior 1 Pose (Virabhadrasana I)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/beginner-yoga-poses-Virabhadrasana-1.jpg",
    bodyParts: "Shoulders, Arms, Back, Thighs, Calves, Ankles",
    connectedOrgans: "",
    traditions: "Ashtanga / Hatha"
  },
  {
    name: "Gate Pose (Parighasana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/beginner-yoga-poses-Parighasana.jpg",
    bodyParts: "Hamstrings, Spine, Torso, Shoulders",
    connectedOrgans: "Abdominal Organs",
    traditions: "Iyengar / Hatha"
  },
  {
    name: "Extended Side Angle Pose (Utthita Parsvakonasana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/sara-crave-Utthita-Parsvakonasana.jpg",
    bodyParts: "Legs, Knees, Ankles, Groins, Spine, Lungs, Shoulders",
    connectedOrgans: "Abdominal Organs",
    traditions: "Ashtanga / Iyengar"
  },
  {
    name: "Wide Legged Forward Bend (Prasarita Padottanasana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/sara-crave-Prasarita-Padottanasana.jpg",
    bodyParts: "Inner legs, Back legs, Spine",
    connectedOrgans: "Abdominal Organs",
    traditions: "Ashtanga / Hatha"
  },
  {
    name: "Wide-Angle Seated Forward Bend (Upavistha Konasana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/Upavistha-Konasana.jpg",
    bodyParts: "Back of legs, Inside of legs, Groins, Spine",
    connectedOrgans: "Kidneys, Abdominal Muscles",
    traditions: "Ashtanga / Hatha"
  },
  {
    name: "Reclining Bound Angle Pose (Supta Baddha Konasana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/supta-baddha-konasana.jpg",
    bodyParts: "Inner thighs, Knees, Groin",
    connectedOrgans: "Ovaries, Bladder, Kidneys",
    traditions: "Restorative / Yin"
  },
  {
    name: "Hero Pose (Virasana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2017/11/yoga-pose-Hero-Pose-%E2%80%93-Virasana.jpg",
    bodyParts: "Ankles, Knees, Thighs, Arches",
    connectedOrgans: "",
    traditions: "Iyengar / Hatha"
  },
  {
    name: "Chair Pose (Utkatasana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/beginner-yoga-poses-Utkatasa.jpg",
    bodyParts: "Ankles, Calves, Thighs, Spine, Chest, Shoulders",
    connectedOrgans: "Heart, Diaphragm, Abdominal Organs",
    traditions: "Ashtanga / Hatha"
  },
  {
    name: "Mountain Pose (Tadasana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/beginner-yoga-poses-Tadasana.jpg",
    bodyParts: "Ankles, Knees, Thighs, Buttocks, Abs",
    connectedOrgans: "",
    traditions: "Hatha / Foundational"
  },
  {
    name: "Bharadvaja's Twist (Bharadvajasana I)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/beginner-yoga-poses-Bharadvajasana-I-.jpg",
    bodyParts: "Hips, Shoulders, Spine, Lower back",
    connectedOrgans: "Abdominal Organs",
    traditions: "Iyengar / Hatha"
  },
  {
    name: "Salutation Seal (Anjali Mudra)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/yoga-poses-Anjali-Mudra.jpg",
    bodyParts: "Wrists, Fingers",
    connectedOrgans: "Heart",
    traditions: "Meditative"
  },
  {
    name: "Corpse Pose (Savasana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/beginner-yoga-pose-Savasana-.jpg",
    bodyParts: "Full Body Relaxation",
    connectedOrgans: "Nervous System, Brain",
    traditions: "All Traditions"
  },
  {
    name: "Standing Forward Bend (Uttanasana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/Uttanasana.jpg",
    bodyParts: "Hips, Calves, Hamstrings, Knees, Thighs",
    connectedOrgans: "Kidneys, Liver",
    traditions: "Ashtanga / Hatha"
  },
  {
    name: "Seated Forward Bend (Paschimottanasana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/beginner-yoga-pose-Paschimottanasana-.jpg",
    bodyParts: "Spine, Shoulders, Hamstrings",
    connectedOrgans: "Liver, Kidneys, Ovaries, Uterus",
    traditions: "Ashtanga / Hatha"
  },
  {
    name: "Child's Pose (Balasana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/yoga-pose-Balasana.jpg",
    bodyParts: "Ankles, Thighs, Hips, Neck, Back",
    connectedOrgans: "Brain",
    traditions: "Restorative / Hatha"
  },
  {
    name: "Cobra Pose (Bhujangasana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/yoga-pose-Bhujagasana.jpg",
    bodyParts: "Spine, Buttocks, Chest, Lungs, Shoulders, Abdomen",
    connectedOrgans: "Abdominal Organs, Heart",
    traditions: "Hatha / Vinyasa"
  },
  {
    name: "Plank Pose (Phalakasana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/yoga-poses-Plank-Pose.jpg",
    bodyParts: "Abdomen, Spine, Wrists, Arms",
    connectedOrgans: "",
    traditions: "Core Strength / Vinyasa"
  },
  {
    name: "Happy Baby Pose (Ananda Balasana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/yoga-pose-Ananda-Balasana.jpg",
    bodyParts: "Inner groins, Spine",
    connectedOrgans: "",
    traditions: "Restorative / Yin"
  },
  {
    name: "Low Lunge (Anjaneyasana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/yoga-poses-Anjaneyasana.jpg",
    bodyParts: "Hip flexors, Buttocks, Thighs, Hamstrings",
    connectedOrgans: "",
    traditions: "Hatha / Vinyasa"
  },
  {
    name: "High Lunge",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/yoga-pose-Utthita-Ashwa-Sanchalanasana.jpg",
    bodyParts: "Hip flexors, Legs, Core",
    connectedOrgans: "",
    traditions: "Hatha / Vinyasa"
  },
  {
    name: "Standing Half Forward Bend (Ardha Uttanasana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/beginner-yoga-poses-Ardha-Uttanasana.jpg",
    bodyParts: "Front torso, Back, Hamstrings",
    connectedOrgans: "Abdominal Organs",
    traditions: "Ashtanga / Hatha"
  },
  {
    name: "Garland Pose (Malasana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/beginner-yoga-poses-Malasana-.jpg",
    bodyParts: "Back torso, Groins, Ankles, Belly",
    connectedOrgans: "",
    traditions: "Hatha"
  },
  {
    name: "Extended Puppy Pose (Uttana Shishosana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/beginner-yoga-poses-Uttana-Shishosana.jpg",
    bodyParts: "Shoulders, Spine, Upper back",
    connectedOrgans: "",
    traditions: "Yin / Hatha"
  },
  {
    name: "Lion Pose (Simhasana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/beginner-yoga-poses-Simhasana.jpg",
    bodyParts: "Face, Throat, Chest",
    connectedOrgans: "",
    traditions: "Hatha"
  },
  {
    name: "Intense Side Stretch (Parsvottanasana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/beginner-yoga-poses-Parsvottanasana.jpg",
    bodyParts: "Legs, Hamstrings, Hips, Wrists, Shoulders, Spine",
    connectedOrgans: "Abdominal Organs",
    traditions: "Ashtanga / Iyengar"
  },
  {
    name: "Locust Pose (Salabhasana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/beginner-yoga-poses-Salabhasana.jpg",
    bodyParts: "Spine, Buttocks, Arms, Legs, Thighs, Belly, Chest, Shoulders",
    connectedOrgans: "Abdominal Organs",
    traditions: "Ashtanga / Hatha"
  },
  {
    name: "Heron Pose (Krounchasana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/beginner-yoga-poses-Krounchasana-.jpg",
    bodyParts: "Hamstrings",
    connectedOrgans: "Heart, Abdominal Organs",
    traditions: "Ashtanga / Iyengar"
  },
  {
    name: "Fish Pose (Matsyasana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/yoga-poses-Matsyasana.jpg",
    bodyParts: "Hip flexors, Intercostal muscles, Belly, Neck, Upper back",
    connectedOrgans: "",
    traditions: "Ashtanga / Hatha"
  },
  {
    name: "Legs-Up-The-Wall Pose (Viparita Karani)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/beginner-yoga-poses-Viparita-Karani.jpg",
    bodyParts: "Back of legs, Front torso, Back of neck",
    connectedOrgans: "",
    traditions: "Restorative / Yin"
  },
  {
    name: "Cow Face Pose (Gomukhasana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2017/11/beginner-yoga-poses-Cow-Face-Pose-%E2%80%93-Gomukhasana-Twisted.jpg",
    bodyParts: "Shoulders, Chest, Triceps, Armpits, Hips, Thighs, Ankles",
    connectedOrgans: "",
    traditions: "Hatha / Iyengar"
  },
  {
    name: "Warrior II Pose (Virabhadrasana II)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/beginner-yoga-poses-Virabhadrasana-II-.jpg",
    bodyParts: "Legs, Ankles, Groins, Chest, Lungs, Shoulders",
    connectedOrgans: "",
    traditions: "Ashtanga / Hatha"
  },
  {
    name: "Tree Pose (Vrksasana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/yoga-poses-Vrksasana.jpg",
    bodyParts: "Spine, Legs, Groins, Inner thighs, Chest, Shoulders",
    connectedOrgans: "",
    traditions: "Hatha"
  },
  {
    name: "Downward Facing Dog (Adho Mukha Svanasana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/beginner-yoga-poses-Adho-Mukha-Svanasana.jpg",
    bodyParts: "Arms, Legs, Shoulders, Hamstrings, Calves, Hands, Arches",
    connectedOrgans: "Brain",
    traditions: "Ashtanga / Hatha"
  },
  {
    name: "Half Lord of the Fishes Pose (Ardha Matsyendrasana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/beginner-yoga-poses-Ardha-Matsyendrasana.jpg",
    bodyParts: "Neck, Shoulders, Hips, Spine",
    connectedOrgans: "Liver, Kidneys",
    traditions: "Ashtanga / Hatha"
  },
  {
    name: "Bridge Pose (Setu Bandha Sarvangasana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/yoga-poses-Setu-Bandha-Sarvangasana.jpg",
    bodyParts: "Chest, Neck, Spine",
    connectedOrgans: "Lungs, Thyroid, Abdominal Organs",
    traditions: "Ashtanga / Hatha"
  },
  {
    name: "Four-Limbed Staff Pose (Chaturanga Dandasana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/beginner-yoga-poses-Chaturanga.jpg",
    bodyParts: "Arms, Wrists, Abdomen",
    connectedOrgans: "",
    traditions: "Ashtanga / Vinyasa"
  },
  {
    name: "Pigeon Pose (Kapotasana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/beginner-yoga-poses-Adho-Mukha-Kapotasana.jpg",
    bodyParts: "Hips, Thighs, Groin, Chest",
    connectedOrgans: "",
    traditions: "Ashtanga / Hatha"
  },
  {
    name: "Lotus Pose (Padmasana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/beginner-yoga-poses-Padmasana.jpg",
    bodyParts: "Hips, Knees, Ankles",
    connectedOrgans: "Brain",
    traditions: "Meditative / Advanced"
  },
  {
    name: "Warrior III (Virabhadrasana III)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/beginner-yoga-poses-Virabhadrasana-III.jpg",
    bodyParts: "Legs, Core, Arms, Shoulders",
    connectedOrgans: "",
    traditions: "Hatha"
  },
  {
    name: "Cow Pose (Bitilasana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/yoga-poses-Bitilasana.jpg",
    bodyParts: "Spine, Neck, Torso",
    connectedOrgans: "",
    traditions: "Hatha / Vinyasa"
  },
  {
    name: "Upward-Facing Dog (Urdhva Mukha Svanasana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/beginner-yoga-poses-Urdhva-Mukha-Svanasana.jpg",
    bodyParts: "Spine, Arms, Wrists, Chest, Shoulders, Abdomen",
    connectedOrgans: "Lungs, Abdominal Organs",
    traditions: "Ashtanga / Vinyasa"
  },
  {
    name: "Shoulder Stand (Salamba Sarvangasana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/beginner-yoga-poses-viparita-karani-1.jpg",
    bodyParts: "Shoulders, Neck, Back",
    connectedOrgans: "Thyroid, Prostate",
    traditions: "Ashtanga / Iyengar"
  },
  {
    name: "Butterfly Pose (Baddha Konasana)",
    photoSrc: "https://blog.saracrave.com.au/wp-content/uploads/2016/09/yoga-poses-Badhakonasana.jpg",
    bodyParts: "Inner thighs, Groin, Knees",
    connectedOrgans: "Ovaries, Bladder, Kidneys",
    traditions: "Ashtanga / Hatha"
  },
  {
    name: "Triangle Pose (Trikonasana)",
    photoSrc: "https://www.yogajournal.com/wp-content/uploads/2021/11/Triangle-Pose_Andrew-Clark_2400x1350.jpg",
    bodyParts: "Legs, Hips, Groin, Hamstrings, Calves, Shoulders, Chest, Spine",
    connectedOrgans: "Abdominal organs",
    traditions: "Ashtanga / Iyengar"
  },
  {
    name: "Camel Pose (Ustrasana)",
    photoSrc: "https://www.yogajournal.com/wp-content/uploads/2021/10/ustrasana-camel-pose-yoy-s2.jpg",
    bodyParts: "Front of body, Ankles, Thighs, Groin, Abdomen, Chest, Throat",
    connectedOrgans: "Abdominal organs",
    traditions: "Ashtanga / Hatha"
  },
  {
    name: "Crow Pose (Bakasana)",
    photoSrc: "https://www.yogajournal.com/wp-content/uploads/2021/11/Crow-Pose_Andrew-Clark_2400x1350.jpg",
    bodyParts: "Arms, Wrists, Core, Upper back",
    connectedOrgans: "",
    traditions: "Arm Balance / Advanced"
  },
  // --- New Poses ---
  {
    name: "Revolved Triangle Pose (Parivritta Trikonasana)",
    photoSrc: "https://www.yogajournal.com/wp-content/uploads/2021/11/Revolved-Triangle-Pose_Andrew-Clark_2400x1350.jpg",
    bodyParts: "Legs, Hips, Spine, Shoulders, Chest",
    connectedOrgans: "Abdominal organs",
    traditions: "Ashtanga / Iyengar"
  },
  {
    name: "Revolved Side Angle Pose (Parivritta Parsvakonasana)",
    photoSrc: "https://www.yogajournal.com/wp-content/uploads/2021/12/Revolved-Side-Angle-Pose_Andrew-Clark_2400x1350.jpg",
    bodyParts: "Legs, Knees, Ankles, Groin, Spine",
    connectedOrgans: "Liver, Spleen",
    traditions: "Ashtanga / Iyengar"
  },
  {
    name: "Half-Moon Pose (Ardha Chandrasana)",
    photoSrc: "https://www.yogajournal.com/wp-content/uploads/2021/11/Half-Moon-Pose_Andrew-Clark_2400x1350.jpg",
    bodyParts: "Ankles, Thighs, Buttocks, Abdomen, Spine",
    connectedOrgans: "",
    traditions: "Iyengar / Hatha"
  },
  {
    name: "Headstand (Sirsasana)",
    photoSrc: "https://www.yogajournal.com/wp-content/uploads/2021/09/supported-headstand-g-768x432-1.jpg",
    bodyParts: "Arms, Shoulders, Core, Spine",
    connectedOrgans: "Brain, Pituitary gland, Pineal gland",
    traditions: "Ashtanga / Iyengar / Advanced"
  },
  {
    name: "Plow Pose (Halasana)",
    photoSrc: "https://www.yogajournal.com/wp-content/uploads/2021/10/plow-pose-g-768x432-1.jpg",
    bodyParts: "Spine, Shoulders, Neck",
    connectedOrgans: "Thyroid, Parathyroid",
    traditions: "Ashtanga / Iyengar"
  },
  {
    name: "Noose Pose (Pasasana)",
    photoSrc: "https://www.yogajournal.com/wp-content/uploads/2021/12/noose-pose_andrew-clark_2400x1350.jpg",
    bodyParts: "Ankles, Thighs, Groin, Spine, Shoulders",
    connectedOrgans: "Abdominal organs",
    traditions: "Ashtanga / Advanced"
  },
  {
    name: "Frog Pose (Bhekasana)",
    photoSrc: "https://www.yogajournal.com/wp-content/uploads/2022/01/Frog-Pose_Andrew-Clark_2400x1350.jpg",
    bodyParts: "Ankles, Quadriceps, Hip Flexors, Abdomen, Chest",
    connectedOrgans: "",
    traditions: "Ashtanga / Advanced"
  },
  {
    name: "Bow Pose (Dhanurasana)",
    photoSrc: "https://www.yogajournal.com/wp-content/uploads/2021/10/bow-pose-g-768x432-1.jpg",
    bodyParts: "Back, Abdomen, Chest, Shoulders, Legs",
    connectedOrgans: "Abdominal organs, Pancreas, Adrenal glands",
    traditions: "Ashtanga / Hatha"
  },
  {
    name: "Little Thunderbolt Pose (Laghu Vajrasana)",
    photoSrc: "https://www.yogajournal.com/wp-content/uploads/2021/12/Laghu-Vajrasana_Andrew-Clark_2400x1350.jpg",
    bodyParts: "Quadriceps, Hip Flexors, Spine, Chest",
    connectedOrgans: "",
    traditions: "Ashtanga / Advanced"
  },
  {
    name: "Sleeping Thunderbolt Pose (Supta Vajrasana)",
    photoSrc: "https://www.yogajournal.com/wp-content/uploads/2021/12/Supta-Vajrasana_Andrew-Clark_2400x1350.jpg",
    bodyParts: "Ankles, Knees, Thighs, Hips, Abdomen",
    connectedOrgans: "",
    traditions: "Ashtanga / Advanced"
  },
  {
    name: "Firefly Pose (Tittibhasana)",
    photoSrc: "https://www.yogajournal.com/wp-content/uploads/2021/12/Firefly-Pose_Andrew-Clark_2400x1350.jpg",
    bodyParts: "Wrists, Arms, Shoulders, Core, Inner thighs",
    connectedOrgans: "",
    traditions: "Ashtanga / Arm Balance / Advanced"
  },
  {
    name: "Peacock Pose (Mayurasana)",
    photoSrc: "https://www.yogajournal.com/wp-content/uploads/2021/12/peacock-pose_andrew-clark_2400x1350.jpg",
    bodyParts: "Wrists, Forearms, Shoulders, Back, Core",
    connectedOrgans: "Digestive organs",
    traditions: "Ashtanga / Hatha / Advanced"
  },
  {
    name: "Feathered Peacock Pose (Pincha Mayurasana)",
    photoSrc: "https://www.yogajournal.com/wp-content/uploads/2021/11/Feathered-Peacock-Pose_Andrew-Clark_2400x1350.jpg",
    bodyParts: "Shoulders, Arms, Core, Back",
    connectedOrgans: "",
    traditions: "Ashtanga / Inversion / Advanced"
  },
  {
    name: "Upward Bow Pose (Urdhva Dhanurasana)",
    photoSrc: "https://www.yogajournal.com/wp-content/uploads/2021/11/Wheel-Pose_Andrew-Clark_2400x1350.jpg",
    bodyParts: "Chest, Lungs, Spine, Wrists, Legs, Buttocks, Abdomen, Arms",
    connectedOrgans: "Thyroid, Pituitary",
    traditions: "Ashtanga / Hatha"
  },
  {
    name: "One-Legged King Pigeon Pose (Eka Pada Rajakapotasana)",
    photoSrc: "https://www.yogajournal.com/wp-content/uploads/2021/12/Eka-Pada-Rajakapotasana-I_Andrew-Clark_2400x1350.jpg",
    bodyParts: "Thighs, Groin, Abdomen, Chest, Shoulders, Neck",
    connectedOrgans: "Abdominal organs",
    traditions: "Hatha / Advanced"
  },
  {
    name: "Monkey Pose (Hanumanasana)",
    photoSrc: "https://www.yogajournal.com/wp-content/uploads/2021/12/Monkey-Pose_Andrew-Clark_2400x1350.jpg",
    bodyParts: "Hamstrings, Hip Flexors, Groin",
    connectedOrgans: "",
    traditions: "Hatha / Advanced"
  },
  {
    name: "King Dancer Pose (Natarajasana)",
    photoSrc: "https://www.yogajournal.com/wp-content/uploads/2021/12/Lord-of-the-Dance-Pose_Andrew-Clark_2400x1350.jpg",
    bodyParts: "Shoulders, Chest, Thighs, Groin, Abdomen",
    connectedOrgans: "",
    traditions: "Hatha / Advanced"
  },
  {
    name: "Handstand (Adho Mukha Vrksasana)",
    photoSrc: "https://www.yogajournal.com/wp-content/uploads/2021/12/Handstand_Andrew-Clark_2400x1350.jpg",
    bodyParts: "Shoulders, Arms, Wrists, Core",
    connectedOrgans: "Brain",
    traditions: "Inversion / Advanced"
  },
  {
    name: "Fish Pose (Matsyendrasana)",
    photoSrc: "https://www.yogajournal.com/wp-content/uploads/2021/11/Fish-Pose_Andrew-Clark_2400x1350.jpg",
    bodyParts: "Neck, Chest, Upper Back, Hips",
    connectedOrgans: "Lungs, Thyroid",
    traditions: "Hatha"
  }
];
