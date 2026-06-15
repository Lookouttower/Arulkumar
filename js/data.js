const DATA = {
  "logoLinks": [
    "https://ibb.co/27gL8rWv",
    "https://ibb.co/WN5bkKRZ",
    "https://ibb.co/vvKwwSj1",
    "https://ibb.co/sdtFHR90",
    "https://ibb.co/N5rqPhG",
    "https://ibb.co/G3tzNDP4",
    "https://ibb.co/XxHNZj3Q"
  ],
  "prompts": [
    {
      "id": "p02",
      "title": "Signature Model Reference",
      "category": "Location-Based Prompts",
      "useCase": "Replace surroundings with a destination-specific environment while preserving the tower exactly.",
      "requiredInput": "Original tower image + [LOCATION] + [TIME OF DAY].",
      "editableVariables": "[LOCATION], [TIME OF DAY], terrain, native vegetation, sky, weather, camera mood.",
      "ratio": "16:9",
      "tags": [
        "Location",
        "Structure Lock",
        "Editorial",
        "National Geographic",
        "Architectural Digest"
      ],
      "prompt": "Use the uploaded tower image as the EXACT architectural reference. Preserve the tower completely unchanged in every detail — same structure, proportions, materials, railings, windows, decks, stairs, rooflines, textures, wood tones, weathering, and overall design. Do not redesign, modernize, add elements, remove features, or alter the architecture in any way. Only change the surrounding environment and landscape.\n\nPlace the tower naturally in [LOCATION], surrounded by authentic regional terrain, vegetation, atmosphere, and environmental details specific to the location. The structure should feel naturally integrated into the land, as if it has existed there for years.\n\nScene should feel cinematic, peaceful, remote, luxurious, and monumental — like a National Geographic documentary still blended with an Architectural Digest luxury retreat editorial.\n\nUse realistic native landscaping, atmospheric depth, layered terrain, dramatic natural sky, and physically accurate lighting conditions appropriate for the region and weather. No suburban clutter unless specified.\n\nComposition:\ncinematic low-angle architectural photography\n35mm lens equivalent\nslight wide-angle natural perspective\nrule-of-thirds framing\nforeground depth with subtle blur\ntower in sharp focus\natmospheric background softness\nrealistic environmental scale\n16:9 aspect ratio\n\nLighting:\n[TIME OF DAY]\nrealistic natural sunlight\ncinematic shadows and highlights\nHDR-balanced exposure\nrealistic window reflections\nnatural atmospheric haze\nphysically accurate shadow direction\n\nVisual Style:\nultra photorealistic\nluxury architectural photography\nNational Geographic realism\nArchitectural Digest editorial quality\nhigh-detail textures\nsubtle organic film grain\ncinematic color grading\nPhase One IQ4 150MP look\nf/9, ISO 64\nNOT CGI\nNOT painterly\nNOT stylized\nNOT visibly AI-generated\n\nMood:\nquiet luxury, solitude, timelessness, remote retreat, environmental storytelling, grounded realism.",
      "negativePrompt": "no architectural changes, no fantasy elements, no futuristic redesign, no distorted proportions, no extra structures, no oversaturated colors, no fake HDR, no warped perspective, no blurry details, no cartoon style, no artificial textures, no low-detail rendering, no visual clutter, no unwanted buildings, no AI-render look.",
      "image": "assets/images/signature-model-reference.png"
    },
    {
      "id": "p01",
      "title": "Image to Caribbean White Timber Beach Style Tower",
      "category": "Image-to-Image Prompts",
      "useCase": "Material refinement and coastal Caribbean location rendering while keeping the tower unchanged.",
      "requiredInput": "Original tower image + desired coastal location reference.",
      "editableVariables": "Location, time of day, vegetation density, water visibility, camera mood.",
      "ratio": "16:9 or 4:5",
      "tags": [
        "Structure Lock",
        "Coastal",
        "White Timber",
        "Bahamas",
        "Photoreal"
      ],
      "prompt": "Use the uploaded image as the ORIGINAL architectural photograph.\n\nABSOLUTE STRUCTURE LOCK\nDo NOT redesign, regenerate, reinterpret, or modify the building architecture in any way.\nPreserve the exact tower geometry, proportions, roof shape, windows, doors, railings, pillars, decks, stairs, and camera perspective exactly as they appear in the source image.\nThis is a material and realism refinement only.\n\nCOASTAL WHITE WOOD MATERIAL\nThe exterior must be clean, bright, coastal white cedar siding similar to high-end Bahamas beach houses.\n\nCharacteristics of the wood:\n• crisp horizontal cedar boards\n• clean neat white real wood grain\n• matte painted finish\n• clean plank seams and shadow gaps\n• well-maintained luxury coastal finish\n\nENVIRONMENT — EXUMA BAHAMAS REALISM\nCreate a natural Exuma Bahamas coastal landscape.\n\nEnvironment details:\n• soft white sand dunes\n• wind-shaped dune grass\n• scattered Caribbean palms\n• irregular tropical vegetation\n• turquoise shallow water with reef patches\n• distant low islands on the horizon\n\nAvoid artificial terrain or CGI rock formations.\n\nGROUND RULE\nThe tower remains elevated on exposed pillars only.\nDo NOT add foundation walls, stone bases, or extra structural elements.\n\nLIGHTING\nNatural Caribbean golden-hour sunlight with realistic shadows and ocean reflection.\n\nPHOTOGRAPHIC REALISM\nThis must look like a real architectural photograph.\n\nCamera style:\n• full-frame camera\n• 50mm architectural lens\n• natural dynamic range\n• subtle film grain\n• real atmospheric depth\n\nNo CGI appearance.",
      "negativePrompt": "No redesign, no modified tower structure, no changed proportions, no added floors, no missing beams, no foundation walls, no stone base, no fake terrain, no CGI look, no cartoon style, no artificial textures, no unrealistic shadows, no warped railings, no distorted windows, no blurry details.",
      "image": "assets/images/caribbean-white-timber-beach-tower.png"
    },
    {
      "id": "p08",
      "title": "Tower 2.0",
      "category": "Location-Based Prompts",
      "useCase": "Exact architectural tower reference with only the surrounding environment and landscape transformed.",
      "requiredInput": "Uploaded tower image + [LOCATION] + [TIME OF DAY].",
      "editableVariables": "[LOCATION], [TIME OF DAY], terrain, vegetation, atmosphere, environmental details.",
      "ratio": "16:9 or 4:5",
      "tags": [
        "Tower 2.0",
        "Structure Lock",
        "Location",
        "Photoreal",
        "Architectural"
      ],
      "image": "assets/images/tower-2-reference.jpeg",
      "prompt": "Use the uploaded tower image as the EXACT architectural reference.\n\nPreserve the tower completely unchanged in every detail — same structure, proportions, materials, railings, windows, decks, stairs, rooflines, support legs, textures, wood tones, weathering, and overall design. Do not redesign, modernize, reinterpret, add elements, remove features, or alter the architecture in any way.\n\nMaintain the exact camera angle, perspective, framing, scale, and composition from the original image.\n\nOnly transform the surrounding environment and landscape.\n\nPlace the tower naturally in [LOCATION], surrounded by authentic regional terrain, vegetation, atmosphere, and environmental details specific to the location. The structure should feel naturally integrated into the land, as if it has existed there for years.\n\nUse realistic native landscaping and natural environmental transitions appropriate to the region. Avoid artificial landscaping, unnecessary props, resort-style additions, or suburban clutter unless specifically requested.\n\nLighting:\n\n[TIME OF DAY]\n\nUse realistic natural sunlight appropriate for the location and time of day, with physically accurate shadows, natural sky tones, subtle atmospheric haze, and realistic reflections.\n\nImage Style:\n\n• photorealistic image-to-image transformation\n\n• realistic architectural photography\n\n• natural color reproduction\n\n• balanced contrast\n\n• authentic material textures\n\n• subtle film grain\n\n• realistic atmospheric depth\n\n• clean DSLR photography look\n\n• natural dynamic range\n\n• believable environmental scale\n\nCamera:\n\n• maintain the original viewpoint from the uploaded image\n\n• standard architectural photography perspective\n\n• normal field of view\n\n• tower remains the primary subject\n\n• background naturally recedes into atmospheric softness\n\nMood:\n\npeaceful, grounded, remote, timeless, inviting, naturally luxurious.\n\nNegative Constraints:\n\nDo NOT change the architecture in any way.\n\nDo NOT alter the wood color or existing materials unless explicitly instructed.\n\nDo NOT modify decks, stairs, railings, windows, rooflines, or structural elements.\n\nDo NOT introduce CGI aesthetics.\n\nDo NOT create painterly, stylized, illustrative, or concept-art looks.\n\nDo NOT make the image appear obviously AI-generated.\n\nThe final result should look like a real photograph of the original tower captured in a different location, with only the surrounding environment changed while preserving the exact building from the source image.",
      "negativePrompt": "Do NOT change the architecture in any way. Do NOT alter the wood color or existing materials unless explicitly instructed. Do NOT modify decks, stairs, railings, windows, rooflines, or structural elements. Do NOT introduce CGI aesthetics. Do NOT create painterly, stylized, illustrative, or concept-art looks. Do NOT make the image appear obviously AI-generated."
    },
    {
      "id": "p09",
      "title": "Tower 3.0",
      "category": "Location-Based Prompts",
      "useCase": "Exact architectural tower reference with only the surrounding environment and landscape transformed.",
      "requiredInput": "Uploaded tower image + [LOCATION] + [TIME OF DAY].",
      "editableVariables": "[LOCATION], [TIME OF DAY], terrain, vegetation, atmosphere, environmental details.",
      "ratio": "16:9 or 4:5",
      "tags": [
        "Tower 3.0",
        "Structure Lock",
        "Location",
        "Photoreal",
        "Architectural"
      ],
      "image": "assets/images/tower-3-reference.jpeg",
      "prompt": "Use the uploaded tower image as the EXACT architectural reference.\n\nPreserve the tower completely unchanged in every detail — same structure, proportions, materials, railings, windows, decks, stairs, rooflines, support legs, textures, wood tones, weathering, and overall design. Do not redesign, modernize, reinterpret, add elements, remove features, or alter the architecture in any way.\n\nMaintain the exact camera angle, perspective, framing, scale, and composition from the original image.\n\nOnly transform the surrounding environment and landscape.\n\nPlace the tower naturally in [LOCATION], surrounded by authentic regional terrain, vegetation, atmosphere, and environmental details specific to the location. The structure should feel naturally integrated into the land, as if it has existed there for years.\n\nUse realistic native landscaping and natural environmental transitions appropriate to the region. Avoid artificial landscaping, unnecessary props, resort-style additions, or suburban clutter unless specifically requested.\n\nLighting:\n\n[TIME OF DAY]\n\nUse realistic natural sunlight appropriate for the location and time of day, with physically accurate shadows, natural sky tones, subtle atmospheric haze, and realistic reflections.\n\nImage Style:\n\n• photorealistic image-to-image transformation\n\n• realistic architectural photography\n\n• natural color reproduction\n\n• balanced contrast\n\n• authentic material textures\n\n• subtle film grain\n\n• realistic atmospheric depth\n\n• clean DSLR photography look\n\n• natural dynamic range\n\n• believable environmental scale\n\nCamera:\n\n• maintain the original viewpoint from the uploaded image\n\n• standard architectural photography perspective\n\n• normal field of view\n\n• tower remains the primary subject\n\n• background naturally recedes into atmospheric softness\n\nMood:\n\npeaceful, grounded, remote, timeless, inviting, naturally luxurious.\n\nNegative Constraints:\n\nDo NOT change the architecture in any way.\n\nDo NOT alter the wood color or existing materials unless explicitly instructed.\n\nDo NOT modify decks, stairs, railings, windows, rooflines, or structural elements.\n\nDo NOT introduce CGI aesthetics.\n\nDo NOT create painterly, stylized, illustrative, or concept-art looks.\n\nDo NOT make the image appear obviously AI-generated.\n\nThe final result should look like a real photograph of the original tower captured in a different location, with only the surrounding environment changed while preserving the exact building from the source image.",
      "negativePrompt": "Do NOT change the architecture in any way. Do NOT alter the wood color or existing materials unless explicitly instructed. Do NOT modify decks, stairs, railings, windows, rooflines, or structural elements. Do NOT introduce CGI aesthetics. Do NOT create painterly, stylized, illustrative, or concept-art looks. Do NOT make the image appear obviously AI-generated."
    },
    {
      "id": "p10",
      "title": "Photorealistic Human",
      "category": "Human Realism Prompts",
      "useCase": "Create a polished ultra-photorealistic beauty close-up portrait from a reference person.",
      "requiredInput": "Reference person image.",
      "editableVariables": "Night setting, makeup, expression, accessories, hand pose, phone camera look.",
      "ratio": "4:5 or 9:16",
      "tags": [
        "Photorealistic Human",
        "Beauty",
        "Close-Up",
        "Portrait",
        "Night"
      ],
      "image": "assets/images/beauty-human.png",
      "prompt": "Ultra-photorealistic beauty close-up portrait of the reference person at night just before heading out to a formal event, framing the face and a hint of the shoulders. Flawless glowing skin with realistic texture and natural freckles softly visible under the makeup, a dewy luminous sheen. Glamorous smoky-eye makeup: blended charcoal and bronze-brown shadow, smudged kohl liner, long lifted lashes, sculpted cheekbones, soft warm blush, full groomed brows, and a glossy caramel-brown nude lip. Long dark hair styled in soft glossy waves framing the face. Chunky textured gold hoop earrings, dark red glossy manicured nails, one hand resting softly near the jaw or collarbone. Confident, polished, slightly sultry expression, gaze toward the lens. Lighting: dark night setting with a soft direct on-camera flash lighting the face warmly, gentle glossy highlights on the skin, deep soft shadows behind, intimate getting-ready mood, glamorous and candid. Shot on a phone camera, macro detail, shallow depth of field, fine grain, realistic skin texture.",
      "negativePrompt": "plastic skin, over-smoothed AI face, doll face, cartoon, 3D render, distorted hands, extra fingers, bad anatomy, dull skin, flat lighting, asymmetric eyes, overexposed flash, washed-out skin, watermark, text, logo"
    },
    {
      "id": "p11",
      "title": "Stylish Female Golfer",
      "category": "Human Realism Prompts",
      "useCase": "Create a premium sporty golf lifestyle image with a polished female golfer.",
      "requiredInput": "Reference or direction for golfer image.",
      "editableVariables": "Course, lighting, outfit, pose, mood, aspect ratio.",
      "ratio": "9:16",
      "tags": [
        "Golfer",
        "Lifestyle",
        "Sport",
        "Premium",
        "Portrait"
      ],
      "image": "assets/images/stylish-female-golfer.jpeg",
      "prompt": "Stylish female golfer preparing to swing on a lush green course, wearing a sleeveless white top, dark green skirt, white visor, and white sneakers. Her hair is tied in a high ponytail with a ribbon, and she holds a driver poised at the tee. The background features dense forest trees and soft natural lighting, evoking a calm, focused atmosphere. Sporty, polished, premium golf lifestyle aesthetic --ar 9:16 --v 7",
      "negativePrompt": ""
    },
    {
      "id": "p12",
      "title": "Portrait of a Stylish Young Man",
      "category": "Human Realism Prompts",
      "useCase": "Create a cinematic full-body outdoor lifestyle portrait of a stylish young man.",
      "requiredInput": "Subject reference or portrait direction.",
      "editableVariables": "Outfit, path, foliage, golden hour light, pose, lens.",
      "ratio": "9:16 or 4:5",
      "tags": [
        "Young Man",
        "Lifestyle",
        "Outdoor",
        "Golden Hour",
        "Portrait"
      ],
      "image": "assets/images/stylish-young-man.jpeg",
      "prompt": "Ultra-realistic full-body outdoor portrait of a stylish young man walking casually along a sunlit path surrounded by dense green foliage. He is wearing a light beige textured jacket over a fitted black t-shirt, loose black trousers, and clean white sneakers. A subtle necklace is visible at his collar. His hands are in his pockets, posture relaxed and confident. Warm golden hour sunlight creates soft natural shadows and highlights on his face and clothing. Lush leafy trees fill the background with a creamy shallow depth of field. Cinematic lifestyle photography, 85mm lens, natural warm color grading, realistic skin texture, high detail fabric textures, ultra-detailed, 8k realism.",
      "negativePrompt": ""
    },
    {
      "id": "p13",
      "title": "Girl on a Yacht",
      "category": "Photoreal Human Prompts",
      "useCase": "Create a bright, luxurious nautical lifestyle portrait on a yacht.",
      "requiredInput": "Adult subject reference or portrait direction + yacht setting.",
      "editableVariables": "Bikini color, pose, sea conditions, sky, camera angle, styling details.",
      "ratio": "4:5 or 9:16",
      "tags": [
        "Yacht",
        "Luxury Lifestyle",
        "Swimwear",
        "Ocean",
        "Photoreal"
      ],
      "image": "assets/images/girl-on-yacht.jpeg",
      "prompt": "A photo of a girl on a yacht, posing standing at the railing with her hand raised above her head, against a backdrop of open sea and bright sky with clouds. The girl has a natural natural appearance. She has an extreme hourglass figure: very large, naturally full breasts, an extremely narrow waist and wide hips. She is wearing a light {argument name=\"bikini color\" default=\"lilac\"} bikini with gold inserts, a translucent mesh cardigan and a chain at the waist. Her hair is long, wavy, brown, loose and caught in the wind. The atmosphere is sunny and nautical, with deep blue water all around and a feeling of a luxurious summer vacation.",
      "negativePrompt": "No underage appearance, no nudity, no transparent swimwear, no distorted anatomy, no extra fingers, no malformed hands, no warped railing, no artificial skin, no plastic texture, no exaggerated facial features, no duplicate limbs, no blurry face, no low resolution, no CGI look, no oversaturation."
    },
    {
      "id": "p14",
      "title": "3D ART",
      "category": "Image-to-Image Prompts",
      "useCase": "Transform a building photograph into a cute rounded isometric 3D tile while retaining its defining architecture.",
      "requiredInput": "Clear front or three-quarter photograph of the building.",
      "editableVariables": "Background color, material softness, lighting, level of stylization.",
      "ratio": "1:1",
      "tags": [
        "3D Art",
        "Isometric",
        "Rounded Tile",
        "Architecture",
        "Stylized"
      ],
      "image": "assets/images/3d-art-isometric-tower.jpeg",
      "prompt": "Convert the photo of this building into a rounded, cute isometric tile 3D rendering style, with a 1:1 ratio. Preserve the prominent features of the photographed building.",
      "negativePrompt": "No missing floors, no altered roof shape, no extra windows, no removed railings, no distorted stairs, no random additions, no flat 2D illustration, no harsh sharp edges, no photorealistic background, no text, no watermark, no low-detail geometry."
    }
  ],
  "movementCards": [
    {
      "title": "Locked Tripod Atmosphere",
      "bestUse": "Hero frames where the tower must remain extremely stable.",
      "description": "The camera stays fixed while haze, light, vegetation, or subtle particles move naturally.",
      "snippet": "Camera movement: locked tripod. Animate only subtle drifting haze, gentle vegetation motion, small highlight shifts, and realistic atmospheric depth. No zoom, no shake, stable horizon."
    },
    {
      "title": "Slow Gimbal Push-In",
      "bestUse": "Premium reveal shots for landing pages and ad intros.",
      "description": "A very slow forward movement adds cinematic depth without warping architecture.",
      "snippet": "Camera movement: extremely slow gimbal push-in, constant focal length, no zoom jump, tower structure locked, subtle foreground parallax, stable horizon."
    },
    {
      "title": "Slow Drone Drift",
      "bestUse": "Remote landscapes, coastlines, mountain views, and real estate hero shots.",
      "description": "A gentle drone drift gives scale while keeping the tower dominant and crisp.",
      "snippet": "Camera movement: extremely slow drone drift, slight lateral parallax, horizon stable, tower in sharp focus, no architecture morphing, no rolling shutter."
    },
    {
      "title": "Gentle Orbit Reveal",
      "bestUse": "Showing height, deck volume, and surrounding terrain.",
      "description": "A restrained partial orbit creates dimensionality without changing the original design.",
      "snippet": "Camera movement: gentle partial orbit reveal, very slow speed, preserve exact tower structure, railings, windows, stairs, roofline, and scale in all frames."
    },
    {
      "title": "Golden Hour Parallax",
      "bestUse": "Luxury hospitality scenes with warm editorial atmosphere.",
      "description": "Subtle foreground and background parallax with stable warm natural light.",
      "snippet": "Animate minimal golden-hour highlight shifts, subtle lens atmosphere, foreground depth movement, natural shadows, no fake HDR, no oversaturation."
    },
    {
      "title": "Winter Snow Atmosphere",
      "bestUse": "Snow cabin, mountain retreat, or fire pit lifestyle visuals.",
      "description": "Light snow and soft fog create seasonal luxury without heavy storm effects.",
      "snippet": "Animate light snow flurries, faint winter fog, slight evergreen movement, warm fire glow stability, no heavy storm, no structure changes."
    },
    {
      "title": "Coastal Breeze Motion",
      "bestUse": "Caribbean, beach, island, and dune environments.",
      "description": "Soft palm movement, dune grass, haze, and ocean shimmer add realism.",
      "snippet": "Animate coastal breeze through palms and dune grass, subtle ocean reflection shimmer, gentle haze, natural sunlight, no CGI water, no camera shake."
    },
    {
      "title": "Human Micro-Movement Scene",
      "bestUse": "Deck lifestyle scenes with people present.",
      "description": "People remain in place with believable micro-motions only.",
      "snippet": "Keep people in the same positions. Add blinking, breathing, tiny head turns, small posture adjustments, natural hands, no extra fingers, no distorted faces."
    }
  ],
  "faqs": [
    [
      "How do I use the image-to-image prompts?",
      "Upload the original tower image first, then paste the selected prompt. Replace editable variables like location, time of day, weather, environment, and movement style."
    ],
    [
      "Why must I upload the tower image first?",
      "The original image acts as the structural reference. It helps the AI preserve tower geometry, height, roof shape, windows, stairs, railings, decks, and camera perspective."
    ],
    [
      "Can I change the tower structure?",
      "No. The main workflow is structure-locked. You can change material, lighting, landscape, season, and atmosphere, but not tower architecture unless a separate design revision is approved."
    ],
    [
      "How do I create a new location version?",
      "Start with the location replacement template, replace [LOCATION], then add detailed terrain, vegetation, weather, time of day, local atmosphere, and camera style."
    ],
    [
      "How detailed should my location prompt be?",
      "Very detailed. Include terrain, vegetation, background, weather, light direction, sky, mood, material behavior, and what to avoid."
    ],
    [
      "Can I add people to the tower deck?",
      "Yes. Use the human placement prompt and keep people naturally positioned with realistic clothing, scale, skin texture, hand anatomy, and matching lighting."
    ],
    [
      "How do I avoid AI-looking results?",
      "Use structure-lock rules, physically accurate lighting, realistic materials, lens/camera details, negative prompts, and avoid cartoon, CGI, fantasy, fake HDR, and oversaturation."
    ],
    [
      "How do I use a prompt?",
      "Open a prompt card, review the full prompt and structure-lock details, then use the Copy Prompt or Copy Negative Prompt button."
    ],
    [
      "Can I use my own reference image?",
      "Yes. Upload the most accurate source image available and follow the required-input and structure-lock guidance shown inside each prompt."
    ],
    [
      "Which brand colors and fonts should I use?",
      "Use Antic Didone for headings, Barlow Condensed for body text, and the palette: black #000000, red wine #8B3838, off-white #E2DED6, olive #78783C, sand #C1A38A, and yellow accent #F7BD25."
    ]
  ]
};

const features = [
  [
    "assets/icons/feature-structure-lock.png",
    "Structure-Locked AI Prompts",
    "Preserve exact tower geometry, proportions, height, railings, beams, stairs, rooflines, and camera angle."
  ],
  [
    "assets/icons/feature-location.png",
    "Location-Based Image Creation",
    "Build accurate tower visuals for beaches, mountains, forests, deserts, winter scenes, and remote retreats."
  ],
  [
    "assets/icons/feature-video.png",
    "Image-to-Video Templates",
    "Animate approved visuals with stable camera rules, micro-movement, atmosphere, and no structure morphing."
  ],
  [
    "assets/icons/feature-library.png",
    "Curated Prompt Library",
    "Use nine production-ready prompt systems arranged in a clear, intentional creative workflow."
  ],
  [
    "assets/icons/feature-brand.png",
    "Brand Consistency Rules",
    "Use the correct logos, typography, palette, spacing, and luxury hospitality visual tone."
  ],
  [
    "assets/icons/feature-rules.png",
    "Do’s & Don’ts Reference",
    "Prevent common AI errors, CGI artifacts, distortion, weak realism, and brand misuse."
  ]
];

const workflowSteps = [
  [
    "Upload the original tower image",
    "Start with the correct base reference before any generation."
  ],
  [
    "Choose the desired location",
    "Select the destination, terrain, regional atmosphere, and environmental story."
  ],
  [
    "Add detailed environment instructions",
    "Describe vegetation, weather, terrain, background, lighting, and mood."
  ],
  [
    "Apply the correct material/style prompt",
    "Use coastal timber, desert, mountain, forest, winter, night, or lifestyle direction."
  ],
  [
    "Lock the tower structure and proportions",
    "Preserve height, geometry, railings, beams, windows, decks, stairs, and roof shape."
  ],
  [
    "Generate the image",
    "Run the prompt with realistic photographic output and strong negative prompts."
  ],
  [
    "Review against Do’s and Don’ts",
    "Check for warping, extra floors, fake terrain, CGI look, and brand errors."
  ],
  [
    "Convert approved image into video",
    "Use stable image-to-video rules after a final still image is approved."
  ],
  [
    "Download or save the HD final asset",
    "Store preview, prompt, HD asset link, category, and final approved version."
  ]
];

const workflowIcons = [
  "assets/icons/workflow-upload.png",
  "assets/icons/workflow-location.png",
  "assets/icons/workflow-environment.png",
  "assets/icons/workflow-style.png",
  "assets/icons/workflow-lock.png",
  "assets/icons/workflow-generate.png",
  "assets/icons/workflow-review.png",
  "assets/icons/workflow-video.png",
  "assets/icons/workflow-download.png"
];

const dos = [
  "Keep the exact tower structure",
  "Preserve exact proportions",
  "Preserve exact height",
  "Preserve exact railings",
  "Preserve exact beams",
  "Preserve exact windows",
  "Preserve existing decks and stairs",
  "Preserve roof shape and camera angle",
  "Use realistic native environments",
  "Use physically accurate lighting",
  "Use high-resolution photographic realism",
  "Use authentic materials such as timber, metal, glass, cedar, stone only when appropriate",
  "Add detailed location information",
  "Keep human subjects realistic and naturally placed",
  "Maintain luxury hospitality quality",
  "Ensure all text is legible",
  "Keep the main subject in focus",
  "Use the approved brand colors and typography"
];

const donts = [
  "Do not redesign the tower",
  "Do not change the architecture",
  "Do not change the height",
  "Do not stretch or compress proportions",
  "Do not remove floors",
  "Do not add extra floors",
  "Do not add random balconies or decks",
  "Do not distort railings, stairs, windows, beams, or rooflines",
  "Do not add foundation walls unless specifically required",
  "Do not use fake CGI terrain",
  "Do not use cartoon, painterly, fantasy, or futuristic styles unless requested",
  "Do not over-saturate colors",
  "Do not create fake HDR effects",
  "Do not blur the main subject",
  "Do not add unwanted buildings or visual clutter",
  "Do not rotate, stretch, outline, or distort the logo",
  "Do not use rounded corners in brand layouts unless specifically approved"
];

const palette = [
  [
    "Black",
    "#000000",
    "Premium backgrounds",
    "#000000",
    "#E2DED6"
  ],
  [
    "Red Wine",
    "#8B3838",
    "Strong accent",
    "#8B3838",
    "#fff"
  ],
  [
    "Off White",
    "#E2DED6",
    "Soft light base",
    "#E2DED6",
    "#000"
  ],
  [
    "Olive",
    "#78783C",
    "Secondary support",
    "#78783C",
    "#fff"
  ],
  [
    "Sand",
    "#C1A38A",
    "Neutral warmth",
    "#C1A38A",
    "#000"
  ],
  [
    "Yellow Accent",
    "#F7BD25",
    "CTA highlight",
    "#F7BD25",
    "#000"
  ]
];

const promptImages = [
  "assets/images/signature-model-reference.png",
  "assets/images/caribbean-white-timber-beach-tower.png",
  "assets/images/tower-2-reference.jpeg",
  "assets/images/tower-3-reference.jpeg",
  "assets/images/beauty-human.png",
  "assets/images/stylish-female-golfer.jpeg",
  "assets/images/stylish-young-man.jpeg"
];

const displayResources = [
  [
    "Prompt Library",
    "Access the curated structure-lock, location, coastal, and human-realism prompt systems.",
    "#prompts"
  ],
  [
    "Image-to-Video Templates",
    "Use stable movement prompts after the final still image has been approved.",
    "#video"
  ],
  [
    "Brand Guidelines",
    "Review logo usage, typography, color, layout, and image rules.",
    "#brand"
  ],
  [
    "Creative Workflow",
    "Follow the approved sequence from reference image to final production asset.",
    "#workflow"
  ]
];
