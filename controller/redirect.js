const Mapping = require('../model/link');

exports.getRedirectUrl = async (req, res) => {
  const { code } = req.params;

  try {
    const mapping = await Mapping.findOne({ from: code });

    if (mapping) {
      let redirectTo = mapping.to;
      if (!redirectTo.startsWith('http://') && !redirectTo.startsWith('https://')) {
        redirectTo = `https://${redirectTo}`;
      }

      return res.redirect(redirectTo);
    } else {
      res.status(404).json({ success: false, message: "Mapping not found" });
    }
  } catch (error) {
    console.error('Error fetching redirect URL:', error);
    res.status(500).json({ success: false, message: "Failed to fetch redirect URL" });
  }
};
