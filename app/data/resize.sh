for f in **/*.png
do
	convert "$f" -resize 128x128 "$f"
done
