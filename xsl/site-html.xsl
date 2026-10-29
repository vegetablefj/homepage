<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:import href="./core/pretext-html.xsl"/>
  <!-- Keep PreTeXt's Contents and previous/up/next navigation. -->
  <xsl:template match="*" mode="primary-navigation-other-controls"/>
  <xsl:template name="readability-options"/>
  <xsl:template name="runestone-header"/>
  <!-- These chapters keep their sections together on one page. -->
  <xsl:template match="chapter[@xml:id='home' or @xml:id='ai4math']" mode="is-chunk">true</xsl:template>
  <xsl:template match="*[ancestor::chapter[@xml:id='home' or @xml:id='ai4math']]" mode="is-chunk">false</xsl:template>
  <xsl:template match="chapter[@xml:id='home' or @xml:id='ai4math'] | *[ancestor::chapter[@xml:id='home' or @xml:id='ai4math']]" mode="is-intermediate">false</xsl:template>
  <xsl:template match="aside[@xml:id='home-profile']" mode="is-hidden">false</xsl:template>
  <!-- Home and Notes are single entries in the shared site directory. -->
  <xsl:template match="chapter[@xml:id='home' or @xml:id='notes']" mode="toc-item">
    <li><xsl:apply-templates select="." mode="toc-item-properties"/></li>
  </xsl:template>
  <!-- These pages are reached through resource links rather than menu entries. -->
  <xsl:template match="chapter[@xml:id='miscellaneous' or @xml:id='ai4math' or @xml:id='paper-revision' or @xml:id='study-notes' or @xml:id='style-reference']" mode="toc-item"/>
  <xsl:template match="chapter[@xml:id='miscellaneous' or @xml:id='ai4math' or @xml:id='paper-revision' or @xml:id='study-notes' or @xml:id='style-reference']" mode="summary-nav"/>
</xsl:stylesheet>
