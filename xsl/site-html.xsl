<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:import href="./core/pretext-html.xsl"/>
  <!-- Keep PreTeXt's Contents and previous/up/next navigation. -->
  <xsl:template match="*" mode="primary-navigation-other-controls"/>
  <xsl:template name="readability-options"/>
  <xsl:template name="runestone-header"/>
  <!-- Home has real sections, but remains a single page. -->
  <xsl:template match="chapter[@xml:id='home']" mode="is-chunk">true</xsl:template>
  <xsl:template match="*[ancestor::chapter[@xml:id='home']]" mode="is-chunk">false</xsl:template>
  <xsl:template match="chapter[@xml:id='home'] | *[ancestor::chapter[@xml:id='home']]" mode="is-intermediate">false</xsl:template>
  <xsl:template match="aside[@xml:id='home-profile']" mode="is-hidden">false</xsl:template>
  <!-- Home and Notes are single entries in the shared site directory. -->
  <xsl:template match="chapter[@xml:id='home' or @xml:id='notes']" mode="toc-item">
    <li><xsl:apply-templates select="." mode="toc-item-properties"/></li>
  </xsl:template>
  <!-- Preserve the old URL without adding it to the menu. -->
  <xsl:template match="chapter[@xml:id='miscellaneous']" mode="toc-item"/>
  <xsl:template match="chapter[@xml:id='miscellaneous']" mode="summary-nav"/>
</xsl:stylesheet>
