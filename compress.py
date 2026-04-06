import os
from PIL import Image

# Path to the "image" folder
image_folder = 'image'

# Create 'low' and 'middle' folders
low_folder = os.path.join(image_folder, 'low')
middle_folder = os.path.join(image_folder, 'middle')

os.makedirs(low_folder, exist_ok=True)
os.makedirs(middle_folder, exist_ok=True)

# Function to compress image to a target size
def compress_image(image_path, output_path, target_size_kb):
    img = Image.open(image_path)
    quality = 95  # Initial quality setting
    img.save(output_path, format="JPEG", quality=quality)
    
    # Check the size of the image and adjust quality
    while os.path.getsize(output_path) > target_size_kb * 1024 and quality > 10:
        quality -= 5
        img.save(output_path, format="JPEG", quality=quality)

# Compress images
for filename in os.listdir(image_folder):
    file_path = os.path.join(image_folder, filename)
    if os.path.isfile(file_path) and filename.lower().endswith(('.png', '.jpg', '.jpeg')):
        # Define output paths
        low_output_path = os.path.join(low_folder, filename)
        middle_output_path = os.path.join(middle_folder, filename)

        # Compress to 1 MB and 1.5 MB
        compress_image(file_path, low_output_path, 1024)  # Compress to 1 MB
        compress_image(file_path, middle_output_path, 1536)  # Compress to 1.5 MB

print("Images have been compressed and saved.")
