# Leaves the gallery page out of the site until _data/gallery.yml lists at least one photo.
# (A file with only comments loads as `false`, so check for a non-empty list.)
Jekyll::Hooks.register :site, :post_read do |site|
  photos = site.data["gallery"]
  next if photos.is_a?(Array) && !photos.empty?
  site.pages.reject! { |page| page.name == "gallery.html" }
end
