import os
from PIL import Image

input_folder = 'arts'
output_folder = 'arts_compressed'
os.makedirs(output_folder, exist_ok=True)

for filename in os.listdir(input_folder):
    if filename.lower().endswith(('.png', '.jpg', '.jpeg')):
        input_path = os.path.join(input_folder, filename)
        output_filename = os.path.splitext(filename)[0] + '.jpg'
        output_path = os.path.join(output_folder, output_filename)
        with Image.open(input_path) as img:
            rgb_img = img.convert('RGB')
            rgb_img.save(output_path, 'JPEG', quality=85)